import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() author: string;
  @Input() text: string;
  @Input() position: 'right' | 'left';
  @Input() color: 'green' | 'purple';

}
