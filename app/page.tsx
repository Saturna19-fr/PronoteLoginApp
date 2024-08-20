"use client";
import { useFormState } from "react-dom";
import { Input } from "@nextui-org/input";
import { Card, CardBody, CardHeader, CardFooter, CardProps } from "@nextui-org/card";
import { LockIcon } from "@/components/icons";
import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";

import { editData } from "./actions"

export default function Home() {
  const appName = "NextUI";
  const [state, formAction] = useFormState(editData, []);
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
      <CardBody className="">
        <form action={formAction} className="overflow-visible py-2 flex flex-col justify-center align-center items-center">
          <Input
          
          type="username"
          name="username"
          label="Nom d'utilisateur Pronote"
          placeholder="p.nom"
          className="max-w-xs"
        />
        <Spacer y={2} />
        <Input
          
          type="password"
          name="password"
          label="Mot de passe Pronote"
          placeholder="OnlyTwentyTwoCharacters"
          className="max-w-xs"
        />
        <Spacer y={2} />
        {state.length > 0 && (
          <div className="text-red-500">
            {state.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        <Button color="primary" type="submit" variant="shadow">
          Se connecter
        </Button>  

        </form>
      </CardBody>
    </Card>
  );
}
