import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../../../firebase/clientApp";
import safeJsonStringify from "safe-json-stringify";
import NotFound from "../../../components/Community/NotFound";
import CommunityHeader from "../../../components/Community/CommunityHeader";
import PageContent from "../../../components/layouts/PageContent";

const CommunityPage = ({ communityData }) => {
  if (!communityData) return <NotFound />;
  return (
    <>
      <CommunityHeader communityData={communityData} />
      <PageContent>
        <>Left</>
        <>Rigth</>
      </PageContent>
    </>
  );
};

export default CommunityPage;

export async function getServerSideProps(context) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId
    );
    const communityDoc = await getDoc(communityDocRef);

    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getServerSideProps", error);
  }
}
