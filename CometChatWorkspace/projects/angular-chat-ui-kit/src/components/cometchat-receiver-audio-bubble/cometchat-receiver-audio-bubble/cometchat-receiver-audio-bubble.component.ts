import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { checkMessageForExtensionsData } from "../../utils/common";

@Component({
  selector: "cometchat-receiver-audio-bubble",
  templateUrl: "./cometchat-receiver-audio-bubble.component.html",
  styleUrls: ["./cometchat-receiver-audio-bubble.component.css"],
})
export class CometchatReceiverAudioBubbleComponent implements OnInit {
  @Input() MessageDetails = null;
  @Input() showToolTip = true;
  @Input() showReplyCount = true;
  @Input() loggedInUser;

  @Output() actionGenerated: EventEmitter<any> = new EventEmitter();

  audioUrl: string;
  //Sets the User Avatar if group
  avatar = null;
  //Sets Username of Avatar
  name: string = null;
  //If Group then only show avatar
  avatarIfGroup: boolean = false;

  checkReaction: boolean = false;

  constructor() {}

  ngOnInit() {
    this.checkReaction = checkMessageForExtensionsData(
      this.MessageDetails,
      "reactions"
    );

    /**
     *  If Group then displays Avatar And Name
     */
    if (this.MessageDetails.receiverType === "group") {
      this.avatarIfGroup = true;
      if (!this.MessageDetails.sender.avatar) {
        const uid = this.MessageDetails.sender.getUid();
        const char = this.MessageDetails.sender
          .getName()
          .charAt(0)
          .toUpperCase();
      }
      this.name = this.MessageDetails.sender.name;
      this.avatar = this.MessageDetails.sender.avatar;
    }
    this.getUrl();
  }

  /**
   * Gets the url of audio to be displayed
   */
  getUrl() {
    this.audioUrl = this.MessageDetails.data.url;
  }

  /**
   * Handles all the actions emitted by the child components that make the current component
   * @param Event action
   */
  actionHandler(action) {
    this.actionGenerated.emit(action);
  }
}
