import { Component, OnInit } from '@angular/core';
import {faTruckMoving,faCreditCard,faTags,faShieldAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-shop-features',
  templateUrl: './shop-features.component.html',
  styleUrls: ['./shop-features.component.scss']
})
export class ShopFeaturesComponent implements OnInit {


  ShopItems = [
    {title:'quick delivery',icon :faTruckMoving,texto:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {title:'pay with easy',icon :faCreditCard,texto:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {title:'best deal',icon: faTags,texto:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'},
    {title:'secured payment',icon :faShieldAlt,texto:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
