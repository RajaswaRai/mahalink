import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const documents = [
  {
    icon: "description",
    title: "Notulensi_Rapat_Umum_Jan.pdf",
    date: "2024-01-15",
    type: "PDF",
  },
  {
    icon: "mail",
    title: "Surat_Undangan_Pemateri_TechTalk.pdf",
    date: "2024-02-02",
    type: "PDF",
  },
  {
    icon: "request_quote",
    title: "Proposal_Dana_Kegiatan_Tahunan.pdf",
    date: "2024-03-10",
    type: "PDF",
  },
  {
    icon: "description",
    title: "Notulensi_Evaluasi_Kepanitiaan.pdf",
    date: "2024-03-25",
    type: "PDF",
  },
];

const templates = [
  { name: "Undangan", active: true },
  { name: "Peminjaman", active: false },
  { name: "Sertifikat", active: false },
  { name: "Custom", active: false },
];

export default function ArchivesPage() {
  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-6">
      {/* Page header */}
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold tracking-tight">Archives</h1>
        <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
          Repository for organizational documents, meeting minutes, and official
          correspondence.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Document Repository */}
        <Card className="lg:col-span-7 overflow-hidden">
          <CardHeader className="flex-row items-center justify-between border-b">
            <CardTitle>Document Repository</CardTitle>
            <CardAction className="col-start-auto row-start-auto justify-self-auto flex gap-1">
              <Button variant="ghost" size="icon-sm">
                <span className="material-symbols-outlined text-[18px]">
                  filter_list
                </span>
              </Button>
              <Button variant="ghost" size="icon-sm">
                <span className="material-symbols-outlined text-[18px]">
                  search
                </span>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="px-0 pb-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead className="pl-5 w-16">Type</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden sm:table-cell">Date</TableHead>
                  <TableHead className="pr-5 text-right w-20">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.title}>
                    <TableCell className="pl-5">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[20px] text-primary">
                          {doc.icon}
                        </span>
                        <Badge variant="outline">{doc.type}</Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium text-sm truncate max-w-[320px] block">
                        {doc.title}
                      </span>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {doc.date}
                      </span>
                    </TableCell>
                    <TableCell className="pr-5 text-right">
                      <Button variant="ghost" size="icon-sm">
                        <span className="material-symbols-outlined text-[18px]">
                          download
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="px-5 py-3 border-t border-border flex justify-center">
              <span className="text-xs text-muted-foreground">
                Showing 1-4 of 42 documents
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Generate Letter */}
        <Card className="lg:col-span-5">
          <CardHeader className="border-b">
            <CardTitle>Generate Letter</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-5">
            <div className="space-y-2">
              <Label>Select Template</Label>
              <div className="grid grid-cols-2 gap-2">
                {templates.map((t) => (
                  <button
                    key={t.name}
                    type="button"
                    className={`h-9 rounded-xl border text-sm font-medium transition-colors ${
                      t.active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="recipient-name">Recipient Name</Label>
                <Input
                  id="recipient-name"
                  placeholder="e.g., Prof. John Doe"
                  className="h-9"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="event-date">Event Date</Label>
                <Input id="event-date" type="date" className="h-9" />
              </div>
            </div>

            <Button size="lg" className="w-full">
              <span className="material-symbols-outlined text-[16px]">
                bolt
              </span>
              Generate PDF
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}