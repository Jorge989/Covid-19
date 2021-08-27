import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { InfoOutline } from "@styled-icons/evaicons-outline/InfoOutline";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import LinkWrapper from "../LinkWrapper";
import { useRouter } from "next/dist/client/router";
type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};
export type MapProps = {
  places?: Place[];
};

const Map = ({ places = [] }: MapProps) => {
  const router = useRouter();
  const lugares = [...places];
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: "610px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lugares?.map(({ id, name, slug, location }) => {
        const { latitude, longitude } = location;

        return (
          <>
            <LinkWrapper href="/about">
              <InfoOutline size={32} aria-label="About" />
            </LinkWrapper>
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              title={name}
              eventHandlers={{
                click: () => {
                  router.push(`/place/${slug}`);
                },
              }}
            />
          </>
        );
      })}
    </MapContainer>
  );
};

export default Map;
