import { Component, Input } from '@angular/core';

@Component({
  selector: 'r-logo',
  template: `
  <svg [attr.width]="width" [attr.height]="height" viewBox="0 0 186 174" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41.5 16L30.5 0H123.5C143.639 0.102517 152.829 3.62808 165.5 16H41.5Z" fill="url(#paint0_linear)"/>
    <path d="M53 33.5L41.5 16H165.5L125 34L53 33.5Z" fill="url(#paint1_linear)"/>
    <path d="M0 57.5H24L79.5 144.5H58L0 57.5Z" fill="url(#paint2_linear)"/>
    <path d="M43.798 57.5H24L79.4343 144.5H91.3131L110.121 173.5H122L43.798 57.5Z" fill="url(#paint3_linear)"/>
    <path d="M165 169.5H142.863L84 82.5H108.149L165 169.5Z" fill="url(#paint4_linear)"/>
    <path d="M145.5 109C183.598 97.9036 194.267 44.15 165.5 16L125 34C148.933 43.7475 152.156 70.1827 125 82.5H108L164 169.5H186L145.5 109Z" fill="url(#paint5_linear)"/>
    <path d="M41.5 16L30.5 0H123.5C143.639 0.102517 152.829 3.62808 165.5 16H41.5Z" fill="url(#paint6_linear)"/>
    <path d="M53 33.5L41.5 16H165.5L125 34L53 33.5Z" fill="url(#paint7_linear)"/>
    <path d="M0 57.5H24L79.5 144.5H58L0 57.5Z" fill="url(#paint8_linear)"/>
    <path d="M43.798 57.5H24L79.4343 144.5H91.3131L110.121 173.5H122L43.798 57.5Z" fill="url(#paint9_linear)"/>
    <path d="M165 169.5H142.863L84 82.5H108.149L165 169.5Z" fill="url(#paint10_linear)"/>
    <path d="M145.5 109C183.598 97.9036 194.267 44.15 165.5 16L125 34C148.933 43.7475 152.156 70.1827 125 82.5H108L164 169.5H186L145.5 109Z" fill="url(#paint11_linear)"/>
    <defs>
    <linearGradient id="paint0_linear" x1="30" y1="-0.500037" x2="143" y2="9.49998" gradientUnits="userSpaceOnUse">
    <stop stop-color="#72268A"/>
    <stop offset="1" stop-color="#E7227F"/>
    </linearGradient>
    <linearGradient id="paint1_linear" x1="41" y1="16" x2="118" y2="-5.49999" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E7227F"/>
    <stop offset="1" stop-color="#B71C81"/>
    </linearGradient>
    <linearGradient id="paint2_linear" x1="39.75" y1="57.5" x2="39.75" y2="144.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1089CC"/>
    <stop offset="1" stop-color="#2C3797"/>
    </linearGradient>
    <linearGradient id="paint3_linear" x1="73" y1="57.5" x2="73" y2="173.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0E99DA"/>
    <stop offset="1" stop-color="#2F3B8A"/>
    </linearGradient>
    <linearGradient id="paint4_linear" x1="124.5" y1="82.5" x2="124.5" y2="169.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E7277A"/>
    <stop offset="1" stop-color="#533394"/>
    </linearGradient>
    <linearGradient id="paint5_linear" x1="154.5" y1="43.5" x2="147" y2="169.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B71C81"/>
    <stop offset="1" stop-color="#55318F"/>
    </linearGradient>
    <linearGradient id="paint6_linear" x1="30" y1="-0.500037" x2="143" y2="9.49998" gradientUnits="userSpaceOnUse">
    <stop stop-color="#72268A"/>
    <stop offset="1" stop-color="#E7227F"/>
    </linearGradient>
    <linearGradient id="paint7_linear" x1="41" y1="16" x2="118" y2="-5.49999" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E7227F"/>
    <stop offset="1" stop-color="#B71C81"/>
    </linearGradient>
    <linearGradient id="paint8_linear" x1="39.75" y1="57.5" x2="39.75" y2="144.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1089CC"/>
    <stop offset="1" stop-color="#2C3797"/>
    </linearGradient>
    <linearGradient id="paint9_linear" x1="73" y1="57.5" x2="73" y2="173.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0E99DA"/>
    <stop offset="1" stop-color="#2F3B8A"/>
    </linearGradient>
    <linearGradient id="paint10_linear" x1="124.5" y1="82.5" x2="124.5" y2="169.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E7277A"/>
    <stop offset="1" stop-color="#533394"/>
    </linearGradient>
    <linearGradient id="paint11_linear" x1="154.5" y1="43.5" x2="147" y2="169.5" gradientUnits="userSpaceOnUse">
    <stop stop-color="#B71C81"/>
    <stop offset="1" stop-color="#55318F"/>
    </linearGradient>
    </defs>
  </svg>
  `,
  styles: [`
    :host {
      display: flex;
    }
  `]
})
export class RLogoComponent {
  @Input()
  width: number;
  @Input()
  height: number;
}
