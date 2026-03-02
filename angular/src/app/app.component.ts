import { Component } from '@angular/core';
import { TextIgniterModule } from '@mindfiredigital/textigniter-angular';

@Component({
  selector: 'app-root',
  imports: [TextIgniterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TextIgniter Angular Demo';

  config = {
    showToolbar: true,
    features: [
      'bold',
      'italic',
      'underline',
      'hyperlink',
      'fontFamily',
      'fontSize',
      'alignLeft',
      'alignCenter',
      'alignRight',
      'unorderedList',
      'orderedList',
      'image',
      'fontColor',
      'bgColor',
      'getHtmlContent',
      'loadHtmlContent'
    ]
  };

  editorContent = { html: '', text: '' };

  onContentChange(content: { html: string; text: string }) {
    this.editorContent = content;
    console.log('Editor content changed:', content);
  }
}
