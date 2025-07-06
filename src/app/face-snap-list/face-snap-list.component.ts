import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        80
      ),
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/330px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ),
      new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      ),
      new FaceSnap(
        'Lac de Vassivière',
        'De quoi se rafraîchir avec ces étés caniculaires',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lac_de_Vassivi%C3%A8re%2C_depuis_l%27%C3%AEle.jpg/1024px-Lac_de_Vassivi%C3%A8re%2C_depuis_l%27%C3%AEle.jpg',
        new Date(),
        255
      )
    ]
    this.faceSnaps[1].setLocation('à la montagne');
    this.faceSnaps[3].setLocation('Royère-de-Vassivière (23)');
  }
}
