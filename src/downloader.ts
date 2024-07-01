import { idRef, IFilter } from "@gooddata/sdk-model";
import { useInsightDataView } from "@gooddata/sdk-ui";

export const downloadFile = async ({
  objectUrl,
  fileName,
}: {
  objectUrl: string;
  fileName: string;
}): Promise<void> => {
  const a = document.createElement("a");
  a.id = "download";
  a.href = objectUrl;
  a.download = fileName ?? "exportedFile";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  // used to release the blob memory when object URL is no longer needed
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl);
  }
};

export const useDownloadReportPdf = ({
  id,
  onFinish,
  filters,
}: {
  id: string;
  filters: IFilter[];
  onFinish: any;
}) => {
  useInsightDataView(
    {
      insight: id ? idRef(id) : undefined,
      filters: [],
      onSuccess: async (result) => {
       try {
         const res = await result?.result().export({
           format: "pdf",
           title: "TEST TITLE",
           showFilters: true,
           visualizationObjectId: id,
           visualizationObjectCustomFilters: filters,
           pdfConfiguration: {
             pdfPageSize: "a4 portrait",
           },
         });

         const fileName = res.fileName ?? "testfilename.pdf";

         const downloadParams = { ...res, fileName };

         await downloadFile(downloadParams);

         onFinish("");
       } catch (error) {
         console.log("Error downloading report", error);
         onFinish("");
       }
      },
      onError: (_) => {
        console.log("Error downloading report");
        onFinish("");
      },
    },
    [id]
  );
};
