"use client";

import {cdn} from "@/app/[locale]/config";
import {ChevronRight} from "lucide-react";
import Image from "next/image";
import {
    Card,
    CardChevronIcon,
    CardContent,
    CardDescription,
    CardImage,
    CardLink,
    CardTitle, CardUser, CardUsers,
} from "../Section.styles";

interface ProjectProps {
    title: string;
    description: string;
    img: string;
    link: string;
    users?: { name: string; image: string; }[];
}

const Project = (props: ProjectProps) => {
    return (
        <CardLink href={props.link} target={"_blank"} passHref>
            <Card>
                <CardImage>
                    <Image
                        src={cdn + props.img}
                        alt={props.title}
                        layout="fill"
                        objectFit="contain"
                    />
                </CardImage>
                <CardContent>
                    <CardTitle>{props.title}</CardTitle>
                    <CardDescription>{props.description}</CardDescription>
                    {props.users && props.users.length > 0 && (
                        <CardUsers>
                            {props.users.map((user, index) => (
                                <CardUser key={index}>
                                    <Image
                                        src={cdn + user.image}
                                        alt={user.name}
                                        width={25}
                                        height={25}
                                    />
                                </CardUser>
                            ))}
                        </CardUsers>
                    )}
                </CardContent>
                <CardChevronIcon>
                    <ChevronRight/>
                </CardChevronIcon>
            </Card>
        </CardLink>
    );
};

export default Project;
