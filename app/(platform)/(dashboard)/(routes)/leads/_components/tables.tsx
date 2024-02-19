import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { PrismaClient } from "@prisma/client";
import { auth } from "@clerk/nextjs";


export default async function Tables() {
  const prisma = new PrismaClient();
  const { userId } = auth();

  
    const leadsData = await prisma.lead.findMany({
      where: {
        userId: userId,
      },
    });


  return (
    <>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Leads
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            Overview of all leads within your organization.
          </p>
        </div>
        {/* Ajoutez ici votre bouton pour ajouter un lead si nécessaire */}
      </div>
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Name
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Email
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Phone
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Status
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leadsData.map((lead, index) => (
            <TableRow
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } border-b border-tremor-border dark:border-dark-tremor-border`}
            >
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {lead.name}
              </TableCell>
              <TableCell>{lead.email}</TableCell>
              <TableCell>{lead.phoneNumber}</TableCell>
              <TableCell>{lead.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
