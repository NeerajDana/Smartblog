import { Component, OnInit } from '@angular/core';

export interface BlogPost {
  Title: string;
  ImageUrl: string;
  subHeading: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  FeaturePosts: BlogPost[] = [
    {
      ImageUrl: '../assets/images/fbp1.jpg',
      Title: ' Work, Travel, Save, Repeat.',
      subHeading: ' Be fearless in the pursuit of what sets your soul on fire.'
    },
    {
      ImageUrl: '../assets/images/fbp2.jpg',
      Title: 'Travel makes one modest.',
      subHeading:
        'Travel makes one modest. You see what a tiny place you occupy in the world.'
    },
    {
      ImageUrl: '../assets/images/fbp3.jpg',
      Title: 'To Travel is to Live.',
      subHeading:
        'The life you have led doesn’t need to be the only life you have'
    },
    {
      ImageUrl: '../assets/images/fbp2.jpg',
      Title: 'Travel makes one modest. next',
      subHeading:
        'Travel makes one modest. You see what a tiny place you occupy in the world.'
    }
  ];

  GetSliderStyle(url) {
    return {
      height: '90vh',
      background: `linear-gradient(315deg, #537895a6 0%, #09203f8c 74%),url('${url}')`,
      backgroundSize: 'cover'
    };
  }
  GetSliderClass(isFirst, isLast, isEven, isOdd) {
    return {
      active: isFirst,
      lastactive: isLast,
      even: isEven,
      odd: isOdd
    };
  }
  navbarTitle = 'Smart blog';

  ngOnInit(): void {}
}
