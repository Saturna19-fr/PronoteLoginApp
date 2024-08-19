import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader, CardFooter, CardProps } from "@nextui-org/card";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { DiscordIcon } from "@/components/icons";
import { GithubIcon, LockIcon } from "@/components/icons";
import {Spacer} from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
export default function Home() {
  const appName = "NextUI";

  return (
    <Card className="py-6 size-full">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
        <p className="text-tiny uppercase font-bold">Connexion</p>
        <div className="flex justify-between space-around flex-center">
        <LockIcon className="text-green-500" />
        <Spacer x={2} />
        <small className="text-default-500 text-green-500 justify-between">Environnement sécurisé</small>
        </div>
        <h4 className="font-bold text-large">Connectez vous à l'application {appName}</h4>
      </CardHeader>
      <Spacer y={2} />
      <CardBody className="overflow-visible py-2 flex justify-center align-center items-center	">
      <Input
      isRequired
      type="username"
      label="Nom d'utilisateur Pronote"
      placeholder="p.nom"
      className="max-w-xs"
    />
    <Spacer y={2} />
    <Input
      isRequired
      type="password"
      label="Mot de passe Pronote"
      placeholder="OnlyTwentyTwoCharacters"
      className="max-w-xs"
    />
    <Spacer y={2} />
    <Button color="success" variant="shadow">
        Se connecter
      </Button>  
      </CardBody>
    </Card>
  );
}
