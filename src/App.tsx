// (C) 2019-2024 GoodData Corporation
import React from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import { backend } from "./backend.js";
import { idRef, IFilter } from "@gooddata/sdk-model";

import * as catalog from "./catalog.js";
import { useDownloadReportPdf } from "./downloader.js";
import { transformFilter } from "./utils.js";

// Workspace ID is injected by WebPack based on the value in package.json
const workspaceId = WORKSPACE_ID;

const DownloadComponent = ({
  insightId,
  setId,
  filters,
}: {
  insightId: string;
  setId: any;
  filters: IFilter[];
}) => {
  useDownloadReportPdf({ id: insightId, onFinish: setId, filters });

  return <div></div>;
};

export const App: React.FC = () => {
  const [id, setId] = React.useState("");
  const [idError, setIdError] = React.useState("");

  const [filters, setFilters] = React.useState<IFilter[]>([]);

  // Not working example which fails with error "Indices must be integers not str"
  const triggerDownloadWithError = async () => {
    const insight = await backend
      .workspace(workspaceId)
      .insights()
      .getInsight(idRef(catalog.Insights.ExportFiltersReproducer));
    const insightFilters = insight.insight.filters;

  console.log("Broken version insightFilters", insightFilters);

    setFilters(insightFilters);
    setId(catalog.Insights.ExportFiltersReproducer);
  };

  // Uncomment this and commend out ^^ version above to see the working example
  const triggerDownload = async () => {
    const insight = await backend
      .workspace(workspaceId)
      .insights()
      .getInsight(idRef(catalog.Insights.ExportFiltersReproducer));

    // Here we transform the filters to the format which work while downloading the pdf
    const insightFilters = insight.insight.filters.reduce((acc, filter) => {
      acc.push(transformFilter(filter));
      return acc;
    }, [] as any);

    console.log(
      "Working version insightFilters AFTER transform",
      insightFilters
    );
    console.log(
      "Working version insightFilters BEFORE transform",
      insight.insight.filters
    );

    setFilters(insightFilters);
    setId(catalog.Insights.ExportFiltersReproducer);
  };

  return (
    <BackendProvider backend={backend}>
      <WorkspaceProvider workspace={workspaceId}>
        <div className="app">
          <button onClick={triggerDownload}>Trigger download</button>
          {id && (
            <DownloadComponent insightId={id} setId={setId} filters={filters} />
          )}

          <button onClick={triggerDownloadWithError}>Trigger download WITH error</button>
          {idError && (
              <DownloadComponent insightId={idError} setId={setIdError} filters={filters} />
          )}
        </div>
      </WorkspaceProvider>
    </BackendProvider>
  );
};
