import { Component, OnInit, Input } from '@angular/core'
import { MiscService } from '../misc.service'

interface Evolution {
  name: string
  image: string
}

@Component({
  selector: 'app-evolution-info',
  templateUrl: './evolution-info.component.html',
  styleUrls: ['./evolution-info.component.css'],
})
export class EvolutionInfoComponent implements OnInit {
  @Input() currentlyHidden = true
  isBlue = false
  evolutions: Evolution[] = [
    {
      name: 'Ditto',
      image: 'placeholder',
    },
    {
      name: 'Mew',
      image: 'placeholder',
    },
    {
      name: 'Mewtwo',
      image: 'placeholder',
    },
  ]
  constructor(private miscService: MiscService) {

  }

  ngOnInit() { }
}
