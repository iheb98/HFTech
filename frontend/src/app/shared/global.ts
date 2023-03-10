import { environment } from "src/environments/environment";

export const GlobalVariable = Object.freeze({
    IMAGE_BASE_PATH: 'https://stock-mbh-backend.herokuapp.com/uploads/',
    BASE_PATH: environment.production? '' : 'http://localhost:3000',
    STATES: ["Neuf", "Bon occasion", "Occasion"],
    MONTHES : ['Janvier', 'Février', 'Mars', 'Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre']
});