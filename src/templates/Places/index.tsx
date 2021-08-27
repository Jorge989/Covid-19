import { NextSeo } from "next-seo";
import Image from "next/image";

import LinkWrapper2 from "../../components/LinkWrapper2";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

import * as S from "./styles";
import { useRouter } from "next/dist/client/router";

type ImageProps = {
  url: string;
  height: number;
  width: number;
};

export type PlacesTemplateProps = {
  //   country: Record<string, any>;
  country: {
    cases: string;
    deaths: string;
    recovered: string;
    tests: string;
    population: string;
    flag: string;
  };

  place: {
    slug: string;
    name: string;
    description?: {
      html: string;
      text: string;
    };
    gallery: ImageProps[];
  };
};

export default function PlacesTemplate({
  place,
  country,
}: PlacesTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          "A simple project to show in a map the places that I went and show more informations and photos when clicked."
        }
        canonical="https://mytrips.com"
        openGraph={{
          url: "https://mytrips.com",
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            "A simple project to show in a map the places that I went and show more informations and photos when clicked.",
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`,
            },
          ],
        }}
      />
      <S.Wrapper>
        <S.Container>
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <>
                <Image
                  key={`photo-${country.flag}`}
                  src={image.url}
                  alt={place.name}
                  width={image.width}
                  height={image.height}
                  quality={75}
                />
              </>
            ))}
          </S.Gallery>
          <S.Caixa>
            <S.Box>
              <S.Heading>
                <LinkWrapper2 href="/maps">
                  <CloseOutline size={32} aria-label="Go back to map" />
                </LinkWrapper2>
                <span>{place.name}</span>
              </S.Heading>
              <S.Paragrafo>
                População: <p className="info">{country.population}</p>
              </S.Paragrafo>
              <S.Paragrafo>
                Casos: <p className="info">{country.cases}</p>
              </S.Paragrafo>
            </S.Box>
            <S.Box>
              <S.Paragrafo>
                Testes: <p className="info">{country.tests}</p>
              </S.Paragrafo>
              <S.Paragrafo>
                Mortes: <p className="info">{country.deaths}</p>
              </S.Paragrafo>
              <S.Paragrafo>
                Recuperações: <p className="info">{country.recovered}</p>
              </S.Paragrafo>
            </S.Box>
          </S.Caixa>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
