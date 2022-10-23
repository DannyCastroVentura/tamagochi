import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    animateDiv();
  }

  imageSrc = "/assets/images/aranha-removebg-preview.png";
  imageAlt = "";

}

function makeNewPosition() {

  // Get viewport dimensions (remove the dimension of the div)
  var h = window.innerHeight - imgSize(false) - 500;
  var w = window.innerWidth - imgSize(true) - 200;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh, nw];

}

function imgSize(widthOrHeight: boolean) {
  let img = document.getElementById('creature');
  if (img === null) {
    return 2;
  }
  if (widthOrHeight) {
    return img.clientWidth;
  } else {
    return img.clientHeight;
  }
}

function animateDiv() {
  var newq = makeNewPosition();
  $('#creature').animate({ top: newq[0], left: newq[1] }, function () {
    setTimeout(
      () => { animateDiv(); }, 3000);
  });

};

