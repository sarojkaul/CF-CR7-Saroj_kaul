import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'travel-details',
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  travel;
    constructor(private route: ActivatedRoute, private cartService: CartService) {
      
      
     
     }
     addToCart(travel) {
      window.alert('Your Trip has been added to the cart!');
      this.cartService.addToCart(travel);
     }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.travel = travels[+params.get('travelId')];
     });
  }

}
