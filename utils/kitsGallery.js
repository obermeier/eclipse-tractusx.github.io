import Business_Kit from "@site/static/img/bpkit.png";
import DataChain_Kit from "@site/static/img/datachainkit.png";
import Connector_Kit from "@site/static/img/connectorkit-min.png";
import Traceability_Kit from "@site/static/img/traceabilitykit.png";
import BehaviourTwinRuLKit from "@site/static/img/BehaviourTwinRuLKit.png";
import DigitalTwin from "@site/static/img/DigitalTwin.png";
import EcoPass from "@site/static/img/EcoPass.png";
import OnlineSimulation from "@site/static/img/OnlineSimulation.png";
import Quality from "@site/static/img/Quality.png";

// import MoreToCome from "@site/static/img/gallery-more_coming-minified.png";

//************************** IMPORTANT **************************** */

// WHEN DEFINING A "DOMAIN" IN THE kitsGallery ARRAY, MAKE SURE TO SELECT/TYPE EXACTLY AS BELOW:
// * Network & Core Services
// * PLM / Quality
// * Sustainability
// * Resiliency

//**************************************************************** */

export const kitsGallery = [
  {
    id: 1,
    name: 'Business Partner Kit',
    domain: 'Network & Core Services',
    img: Business_Kit,
    pageRoute: "/docs-kits/kits/Business Partner Kit/Adoption View"
  },
  {
    id: 2,
    name: 'Data Chain Kit',
    domain: 'Network & Core Services',
    img: DataChain_Kit,
    pageRoute: "/docs-kits/kits/Data%20Chain%20Kit/Adoption%20View%20Data%20Chain%20Kit"
  },
  {
    id: 3,
    name: 'Connector Kit',
    domain: 'Network & Core Services',
    img: Connector_Kit,
    pageRoute: "/docs-kits/kits/tractusx-edc/docs/kit/adoption-view/Adoption View"
  },
  {
    id: 4,
    name: 'Traceability Kit',
    domain: 'PLM / Quality',
    img: Traceability_Kit,
    pageRoute: "/docs-kits/kits/Traceability Kit/Adoption View Traceability Kit"
  },
  {
    id: 5,
    name: 'Behaviour Twin RuL Kit',
    domain: 'PLM / Quality',
    img: BehaviourTwinRuLKit,
    pageRoute: "/docs-kits/kits/Behaviour%20Twin%20RuL%20Kit/Adoption%20View%20Remaining%20Useful%20Life%20Kit"
  },
  {
    id: 6,
    name: 'Digital Twin Kit',
    domain: 'Network & Core Services',
    img: DigitalTwin,
    pageRoute: "/docs-kits/kits/Digital%20Twin%20Kit/Adoption%20View%20Digital%20Twin%20Kit"
  },
  {
    id: 7,
    name: 'Eco Pass Kit',
    domain: 'Sustainability',
    img: EcoPass,
    pageRoute: "/docs-kits/kits/Eco_Pass_KIT/page-adoption-view"
  },
  {
    id: 8,
    name: 'Online Simulation Kit',
    domain: 'Resiliency',
    img: OnlineSimulation,
    pageRoute: "/docs-kits/kits/OSim%20Kit/Adoption%20View%20OSim%20Kit"
  },
  {
    id: 9,
    name: 'Quality Kit',
    domain: 'PLM / Quality',
    img: Quality,
    pageRoute: "/docs-kits/kits/Quality-Kit/Adoption%20View%20Quality%20Kit"
  },
  {
    id: 10,
    name: 'Modular Production Kit',
    domain: 'Resiliency',
    img: ModularProduction,
    pageRoute:
      '/docs-kits/kits/Modular%20Production%20Kit/Adoption%20View%20Modular%20Production%20Kit',
  },
  // {
  //   id: 4,
  //   img: MoreToCome
  // },
]
