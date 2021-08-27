import styles from "./styles.module.scss";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { MapProps } from "../../components/Maps";
const Map = dynamic(() => import("../../components/Maps"), { ssr: false });

export default function HomeTemplate({ places }: MapProps) {
  return (
    <div>
      <Map places={places} />
    </div>
  );
}
