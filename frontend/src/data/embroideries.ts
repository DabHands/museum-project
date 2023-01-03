import { Embroidery } from "../types/types";
import embroideries from '../images/embroideries-info.json';

const embroideriesString = JSON.stringify(embroideries);
export const AllEmbroideries = <Embroidery[]>JSON.parse(embroideriesString);
