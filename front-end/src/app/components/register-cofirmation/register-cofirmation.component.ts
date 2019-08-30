import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-cofirmation',
  templateUrl: './register-cofirmation.component.html',
  styleUrls: ['./register-cofirmation.component.css']
})
export class RegisterCofirmationComponent implements OnInit {

  // @Input()
  public customerId: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.customerId = parseInt(this.route.snapshot.paramMap.get('customerId'));
  }

}
