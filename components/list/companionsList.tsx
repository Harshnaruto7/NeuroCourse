"use client";
import React from "react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface CompanionListProp {
  title: string;
  Companions?: Companion[];
  ClassNames?: string;
}




const CompanionsList = ({ title, Companions, ClassNames }: CompanionListProp) => {
    return (
      <article className={cn("companion-list", ClassNames)}>
        <h2 className="font-bold text-3xl"> Recent Sessions</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg w-2/3">Lessons</TableHead>
              <TableHead className="text-lg">Subject</TableHead>
              <TableHead className="text-lg text-right">Duration</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Companions?.map((companion) => (
              <TableRow key={companion.id}>
                <TableCell>
                  <Link href={`/companions/${companion.id}`}>
                    <div className="flex items-center gap-2">
                      <Image
                        src={`/icons/${companion.subject}.svg`} 
                        alt={companion.subject}
                        width={35}
                        height={35}
                      />
                      <span>{companion.subject}</span>
                    </div>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </article>
    );
};

export default CompanionsList;
