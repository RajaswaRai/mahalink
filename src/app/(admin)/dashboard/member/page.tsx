"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";

type Member = {
  id: string;
  name: string;
  studentId: string;
  division: string;
  status: "Active" | "Pending" | "Inactive";
  avatar?: string;
};

const members: Member[] = [
  {
    id: "1",
    name: "A. Turing",
    studentId: "0921-X",
    division: "Research",
    status: "Active",
  },
  {
    id: "2",
    name: "H. Lamarr",
    studentId: "0442-Y",
    division: "Action",
    status: "Active",
  },
  {
    id: "3",
    name: "N. Tesla",
    studentId: "0883-Z",
    division: "Logistics",
    status: "Pending",
  },
  {
    id: "4",
    name: "A. Lovelace",
    studentId: "0117-A",
    division: "Media",
    status: "Active",
  },
  {
    id: "5",
    name: "C. Darwin",
    studentId: "0554-B",
    division: "Research",
    status: "Inactive",
  },
];

const divisions = ["All Divisions", "Action", "Research", "Logistics", "Media"];

const statusVariant: Record<
  Member["status"],
  "default" | "secondary" | "outline" | "destructive"
> = {
  Active: "default",
  Pending: "secondary",
  Inactive: "destructive",
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function MembersPage() {
  const [search, setSearch] = useState("");
  const [activeDivision, setActiveDivision] = useState("All Divisions");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedRole, setSelectedRole] = useState("member");

  const filtered = members.filter((m) => {
    const matchDiv =
      activeDivision === "All Divisions" || m.division === activeDivision;
    const matchSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.studentId.toLowerCase().includes(search.toLowerCase());
    return matchDiv && matchSearch;
  });

  function openRoleModal(member: Member) {
    setSelectedMember(member);
    setModalOpen(true);
  }

  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            Module 02
          </p>
          <h1 className="text-2xl font-bold tracking-tight">
            Member Directory
          </h1>
        </div>
        <Button size="sm">
          <span className="material-symbols-outlined text-[16px]">add</span>
          New Record
        </Button>
      </div>

      {/* Filters + Search */}
      <Card>
        <CardContent className="flex flex-col sm:flex-row gap-3">
          {/* Division filter chips */}
          <div className="flex flex-wrap gap-2 flex-1">
            {divisions.map((div) => (
              <button
                key={div}
                onClick={() => setActiveDivision(div)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeDivision === div
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {div}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative sm:w-56 flex-shrink-0">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 material-symbols-outlined text-[16px] text-muted-foreground">
              search
            </span>
            <Input
              placeholder="Cari nama / ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8 h-8 text-xs"
            />
          </div>
        </CardContent>
      </Card>

      {/* Member table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Semua Anggota</CardTitle>
          <CardAction>
            <Badge variant="outline">{filtered.length} anggota</Badge>
          </CardAction>
        </CardHeader>
        <CardContent className="px-0 pb-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="pl-5">Nama</TableHead>
                <TableHead className="hidden sm:table-cell">Divisi</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="pr-5 text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center py-12 text-muted-foreground text-sm"
                  >
                    Tidak ada anggota yang cocok.
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="pl-5">
                      <div className="flex items-center gap-3">
                        <Avatar size="default">
                          {member.avatar && <AvatarImage src={member.avatar} />}
                          <AvatarFallback>
                            {getInitials(member.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-sm">{member.name}</p>
                          <p className="text-xs text-muted-foreground">
                            ID: {member.studentId}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {member.division}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[member.status]}>
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="pr-5 text-right">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => openRoleModal(member)}
                        title="Kelola peran"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          manage_accounts
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Role Assignment Modal */}
      {modalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div className="w-full max-w-sm bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="font-semibold">Assign Role</h2>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setModalOpen(false)}
              >
                <span className="material-symbols-outlined text-[18px]">
                  close
                </span>
              </Button>
            </div>

            {/* Member info */}
            <div className="p-5 space-y-4">
              <div className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                <Avatar>
                  <AvatarFallback>
                    {getInitials(selectedMember.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs text-muted-foreground">Target</p>
                  <p className="font-semibold text-sm">
                    {selectedMember.name} ({selectedMember.studentId})
                  </p>
                </div>
              </div>

              {/* Role options */}
              <div className="space-y-2">
                {[
                  {
                    value: "admin",
                    label: "Administrator",
                    desc: "Akses penuh ke semua fitur",
                  },
                  {
                    value: "treasurer",
                    label: "Bendahara",
                    desc: "Akses modul keuangan",
                  },
                  {
                    value: "secretary",
                    label: "Sekretaris",
                    desc: "Kelola arsip dan agenda",
                  },
                  {
                    value: "member",
                    label: "Anggota Standar",
                    desc: "Akses terbatas",
                  },
                ].map(({ value, label, desc }) => (
                  <label
                    key={value}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all border ${
                      selectedRole === value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={value}
                      checked={selectedRole === value}
                      onChange={() => setSelectedRole(value)}
                      className="mt-0.5 accent-primary"
                    />
                    <div>
                      <p className="text-sm font-medium">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2 p-4 border-t border-border bg-muted/30">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalOpen(false)}
              >
                Batal
              </Button>
              <Button size="sm" onClick={() => setModalOpen(false)}>
                Simpan Perubahan
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
