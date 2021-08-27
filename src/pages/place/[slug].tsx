import { GetStaticProps } from "next";
import { GetServerSideProps } from "next";
import client from "../../graphql/client";
import { GET_PLACES, GET_PLACE_BY_SLUG } from "../../graphql/queries";
import { useRouter } from "next/dist/client/router";
import {
  GetPlacesQuery,
  GetPlaceBySlugQuery,
} from "../../graphql/generated/graphql";
import PlacesTemplate, { PlacesTemplateProps } from "../../templates/Places";
import { api } from "../../services/api";
export const getAllUsers = async () => {
  const users = await api.get("all").then(({ data }) => {
    return data;
  });
  return users;
};
export default function Place({ place, country }: PlacesTemplateProps) {
  const router = useRouter();

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null;

  return <PlacesTemplate place={place} country={country} />;
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3,
  });

  const paths = places.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const country = await api.get(`countries/${params.slug}`).then(({ data }) => {
    console.log("aqui", data);
    return data;
  });

  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`,
    }
  );

  if (!place) return { notFound: true };

  return {
    props: {
      place,
      country,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const allInfos = await getAllUsers();
//   return {
//     props: {
//       allInfos,
//       cases: allInfos.cases,
//     },
//   };
// };
