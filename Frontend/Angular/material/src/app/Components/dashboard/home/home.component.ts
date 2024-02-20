import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('Carousel') carousel!: ElementRef;
  items = [ { title: 'Slide 1', imageUrl: 'https://www.google.com/search?q=registraduria&sca_esv=575682614&rlz=1C1UUXU_esCO992CO992&tbm=isch&sxsrf=AM9HkKndDwjYZz6A_xrr1KF9ydiv1M5w6Q:1698031635719&source=lnms&sa=X&ved=2ahUKEwjbi9vjnIuCAxXol2oFHfZeAkcQ_AUoA3oECAMQBQ&biw=1366&bih=641#imgrc=v-ApJrHCQalnrM', description: 'Descripción del Slide 1' },
  { title: 'Slide 2', imageUrl: 'https://www.google.com/search?q=registraduria&sca_esv=575682614&rlz=1C1UUXU_esCO992CO992&tbm=isch&sxsrf=AM9HkKndDwjYZz6A_xrr1KF9ydiv1M5w6Q:1698031635719&source=lnms&sa=X&ved=2ahUKEwjbi9vjnIuCAxXol2oFHfZeAkcQ_AUoA3oECAMQBQ&biw=1366&bih=641#imgrc=v-ApJrHCQalnrM&imgdii=Du_9WtiwAyUpIM', description: 'Descripción del Slide 2' },
  { title: 'Slide 3', imageUrl: 'https://www.google.com/search?q=registraduria&sca_esv=575682614&rlz=1C1UUXU_esCO992CO992&tbm=isch&sxsrf=AM9HkKndDwjYZz6A_xrr1KF9ydiv1M5w6Q:1698031635719&source=lnms&sa=X&ved=2ahUKEwjbi9vjnIuCAxXol2oFHfZeAkcQ_AUoA3oECAMQBQ&biw=1366&bih=641#imgrc=Du_9WtiwAyUpIM&imgdii=Pu10k3WUa8ZVLM', description: 'Descripción del Slide 3' }
];
currentIndex = 0;

ngOnInit() {
  setInterval(() => this.nextSlide(), 3000); // Cambiar automáticamente cada 3 segundos
}

nextSlide() {
  this.currentIndex = (this.currentIndex + 1) % this.items.length;
  const offset = -this.currentIndex * 100;
  this.carousel.nativeElement.style.transform = `translateX(${offset}%)`;
}
}




