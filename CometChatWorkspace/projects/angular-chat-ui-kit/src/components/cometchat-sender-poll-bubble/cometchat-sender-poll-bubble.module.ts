import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CometchatSenderPollBubbleComponent } from "./cometchat-sender-poll-bubble/cometchat-sender-poll-bubble.component";
import { CometchatToolTipModule } from "../cometchat-tool-tip/cometchat-tool-tip.module";
import { CometchatReadRecieptModule } from "../cometchat-read-reciept/cometchat-read-reciept.module";
import { CometchatReplyCountModule } from "../cometchat-reply-count/cometchat-reply-count.module";
import { CometchatRegularReactionViewModule } from "../cometchat-regular-reaction-view/cometchat-regular-reaction-view.module";

@NgModule({
  declarations: [CometchatSenderPollBubbleComponent],
  imports: [
    CommonModule,
    CometchatToolTipModule,
    CometchatReadRecieptModule,
    CometchatReplyCountModule,
    CometchatRegularReactionViewModule,
  ],
  exports: [CometchatSenderPollBubbleComponent],
})
export class CometchatSenderPollBubbleModule {}
