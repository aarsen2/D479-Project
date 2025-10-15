import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Attractions } from './pages/attractions/attractions';
import { Hotels } from './pages/hotels/hotels';
import { Restaurants } from './pages/restaurants/restaurants';
import { Transportation } from './pages/transportation/transportation';
import { HelpfulInfo } from './pages/helpful-info/helpful-info';
import { PublicTransit } from './components/public-transit/public-transit';
import { ArrivalTransit } from './components/arrival-transit/arrival-transit';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // 👈 Redirect base path
    { path: 'home', component: Home },
    { path: 'attractions', component: Attractions },
    { path: 'transportation', component: Transportation, children: [
        { path: 'public-transit', component: PublicTransit },
        { path: 'arrival-transit', component: ArrivalTransit }
    ] },
    { path: 'hotels', component: Hotels },
    { path: 'restaurants', component: Restaurants },
    { path: 'helpful-information', component: HelpfulInfo },
        // Catch-all route
    { path: '**', redirectTo: '/home', pathMatch: 'full' }

];
