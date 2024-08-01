/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Membership as PrismaMembership,
  Organisation as PrismaOrganisation,
  User as PrismaUser,
} from "@prisma/client";

export class MembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MembershipCountArgs, "select">
  ): Promise<number> {
    return this.prisma.membership.count(args);
  }

  async memberships(
    args: Prisma.MembershipFindManyArgs
  ): Promise<PrismaMembership[]> {
    return this.prisma.membership.findMany(args);
  }
  async membership(
    args: Prisma.MembershipFindUniqueArgs
  ): Promise<PrismaMembership | null> {
    return this.prisma.membership.findUnique(args);
  }
  async createMembership(
    args: Prisma.MembershipCreateArgs
  ): Promise<PrismaMembership> {
    return this.prisma.membership.create(args);
  }
  async updateMembership(
    args: Prisma.MembershipUpdateArgs
  ): Promise<PrismaMembership> {
    return this.prisma.membership.update(args);
  }
  async deleteMembership(
    args: Prisma.MembershipDeleteArgs
  ): Promise<PrismaMembership> {
    return this.prisma.membership.delete(args);
  }

  async getOrganisation(parentId: string): Promise<PrismaOrganisation | null> {
    return this.prisma.membership
      .findUnique({
        where: { id: parentId },
      })
      .organisation();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.membership
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
