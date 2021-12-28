import { NextPage } from "next";
import { useRouter } from "next/router";
import { useChracterData } from "../../hooks/useCharacterData";

const ChracterDetail: NextPage= () => {
    const router = useRouter()
    const path = "characters/" + router.query.id;
    const {data , error} = useChracterData(path);

    return (
        <div>
            <img src="data.images.main" alt="" />
        </div>
    )
}
export default ChracterDetail;