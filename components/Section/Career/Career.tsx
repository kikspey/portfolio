import {cdn} from "@/app/[locale]/config";
import Job from "./Job";
import {CardsContainer} from "../Section.styles";
import {getScopedI18n} from "@/locales/server";

const Career = async () => {
    const t = await getScopedI18n("career");

    const jobs = [
        {
            title: t("enedis.title"),
            beginDate: t("today"),
            endDate: "Aug 2028",
            company: t("enedis.company"),
            companyLogo: cdn + "/career/enedis.avif",
            location: t("enedis.location"),
            description: t("enedis.description"),
            link: "https://www.enedis.fr/"
        },
        {
            title: t("cnrs.title"),
            beginDate: "Sep 2024",
            endDate: "Aug 2025",
            company: t("cnrs.company"),
            companyLogo: cdn + "/career/cnrs.avif",
            location: t("cnrs.location"),
            description: t("cnrs.description"),
            link: "https://www.cnrs.fr/"
        },
        {
            title: t("rgu.title"),
            beginDate: "Apr 2024",
            endDate: "Jun 2024",
            company: t("rgu.company"),
            companyLogo: cdn + "/career/rgu.avif",
            location: t("rgu.location"),
            description: t("rgu.description"),
            link: "https://www.rgu.ac.uk/"
        }
    ];

    return (
        <CardsContainer>
            {jobs.map((job, index) => (
                <Job
                    key={index}
                    title={job.title}
                    beginDate={job.beginDate}
                    endDate={job.endDate}
                    company={job.company}
                    companyLogo={job.companyLogo}
                    location={job.location}
                    description={job.description}
                    link={job.link}
                />
            ))}
        </CardsContainer>
    );
};

export default Career;