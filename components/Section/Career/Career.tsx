import {cdn} from "@/app/[locale]/config";
import Job from "./Job";
import {CardsContainer} from "../Section.styles";
import {getScopedI18n} from "@/locales/server";

const Career = async () => {
    const t = await getScopedI18n("career");

    return (
        <CardsContainer>
            <Job
                title={t("cnrs.title")}
                beginDate="Sep 2024"
                endDate="Present"
                company={t("cnrs.company")}
                companyLogo={cdn + "/xra/portfolio/career/cnrs.avif"}
                location={t("cnrs.location")}
                description={t("cnrs.description")}
                link="https://www.cnrs.fr/"
            />
            <Job
                title={t("rgu.title")}
                beginDate="Apr 2024"
                endDate="Jun 2024"
                company={t("rgu.company")}
                companyLogo={cdn + "/xra/portfolio/career/rgu.avif"}
                location={t("rgu.location")}
                description={t("rgu.description")}
                link="https://www.rgu.ac.uk/"
            />
        </CardsContainer>
    );
};

export default Career;