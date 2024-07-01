import {
  IFilter,
  INegativeAttributeFilter,
  IPositiveAttributeFilter,
} from "@gooddata/sdk-model";

const transformPositiveAttributeFilter = (
  filter: IPositiveAttributeFilter
) => ({
  ...filter,
  positiveAttributeFilter: {
    ...filter.positiveAttributeFilter,
    displayForm: {
      identifier: {
        // @ts-ignore
        id: filter.positiveAttributeFilter.displayForm.identifier,
        type: "label",
      },
    },
  },
});

const transformNegativeAttributeFilter = (
  filter: INegativeAttributeFilter
) => ({
  ...filter,
  negativeAttributeFilter: {
    ...filter.negativeAttributeFilter,
    displayForm: {
      identifier: {
        // @ts-ignore
        id: filter.negativeAttributeFilter.displayForm.identifier,
        type: "label",
      },
    },
  },
});

export const filterTransformMap: Record<string, Function> = {
  positiveAttributeFilter: transformPositiveAttributeFilter,
  negativeAttributeFilter: transformNegativeAttributeFilter,
};

export const transformFilter = (filter: IFilter) => {
  for (const key in filterTransformMap) {
    if (key in filter) {
      return filterTransformMap[key](filter);
    }
  }
  return filter;
};
