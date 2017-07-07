import rootContainer from "./rootContainer";
import {landingRoutes} from "./modules/landing";
import appLayout from "./modules/appLayout";


const routes = [
  {
    component: rootContainer,
    children: [
      ...landingRoutes,
      {
        component: appLayout
      },
    ]
  }
];

export default routes;