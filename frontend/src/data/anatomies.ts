import { Anatomy } from "../types/types";
import anatomies from '../images/anatomies-info.json';

const anatomiesString = JSON.stringify(anatomies);
export const AllAnatomies = <Anatomy[]>JSON.parse(anatomiesString);