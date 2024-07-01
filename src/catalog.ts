/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2024-06-26T12:34:39.635Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Campaign channel id
 * Attribute ID: campaign_channel_id
 */
export const CampaignChannelId: IAttribute = newAttribute("campaign_channel_id");
/**
 * Attribute Title: Category
 * Attribute ID: campaign_channels.category
 */
export const Category: IAttribute = newAttribute("campaign_channels.category");
/**
 * Attribute Title: Campaign id
 * Attribute ID: campaign_id
 */
export const CampaignId: IAttribute = newAttribute("campaign_id");
/**
 * Attribute Title: Campaign name
 * Attribute ID: campaign_name
 */
export const CampaignName: IAttribute = newAttribute("campaign_name");
/**
 * Attribute Title: Customer id
 * Attribute ID: customer_id
 */
export const CustomerId: IAttribute = newAttribute("customer_id");
/**
 * Attribute Title: Customer name
 * Attribute ID: customer_name
 */
export const CustomerName: IAttribute = newAttribute("customer_name");
/**
 * Attribute Title: Order id
 * Attribute ID: order_id
 */
export const OrderId: IAttribute = newAttribute("order_id");
/**
 * Attribute Title: Order line id
 * Attribute ID: order_line_id
 */
export const OrderLineId: IAttribute = newAttribute("order_line_id");
/**
 * Attribute Title: Order status
 * Attribute ID: order_status
 */
export const OrderStatus: IAttribute = newAttribute("order_status");
/**
 * Attribute Title: Product id
 * Attribute ID: product_id
 */
export const ProductId: IAttribute = newAttribute("product_id");
/**
 * Attribute Title: Product name
 * Attribute ID: product_name
 */
export const ProductName: IAttribute = newAttribute("product_name");
/**
 * Attribute Title: Category
 * Attribute ID: products.category
 */
export const Category_1: IAttribute = newAttribute("products.category");
/**
 * Attribute Title: Program Group
 * Attribute ID: Program_Group
 */
export const ProgramGroup: IAttribute = newAttribute("Program_Group");
/**
 * Attribute Title: Region
 * Attribute ID: region
 */
export const Region: IAttribute = newAttribute("region");
/**
 * Attribute Title: State
 * Attribute ID: state
 */
export const State: IAttribute = newAttribute("state");
/**
 * Attribute Title: Type
 * Attribute ID: type
 */
export const Type: IAttribute = newAttribute("type");
/**
 * Metric Title: sales2
 * Metric ID: sales2
 * Metric Type: MAQL Metric
 */
export const Sales2: IMeasure<IMeasureDefinition> = newMeasure(idRef("sales2", "measure"));
/**
 * Metric Title: Test
 * Metric ID: test
 * Metric Type: MAQL Metric
 */
export const Test: IMeasure<IMeasureDefinition> = newMeasure(idRef("test", "measure"));
/**
 * Fact Title: Budget
 * Fact ID: budget
 */
export const Budget = {
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Budget
   * Fact ID: budget
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("budget", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Price
 * Fact ID: price
 */
export const Price = {
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("price", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("price", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("price", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("price", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Price
   * Fact ID: price
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("price", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Quantity
 * Fact ID: quantity
 */
export const Quantity = {
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Quantity
   * Fact ID: quantity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("quantity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Spend
 * Fact ID: spend
 */
export const Spend = {
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Spend
   * Fact ID: spend
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("spend", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Values
 * Fact ID: Values
 */
export const Values = {
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Values
   * Fact ID: Values
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("Values", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {
  /**
   * Date Data Set Title: Date
   * Date Data Set ID: date
   */
  Date: {
    ref: idRef("date", "dataSet"),
    identifier: "date"
    /**
     * Date Attribute: Date - Date
     * Date Attribute ID: date.day
     */,
    DateDate: {
      ref: idRef("date.day", "attribute"),
      identifier: "date.day"
      /**
       * Display Form Title: Date - Date
       * Display Form ID: date.day
       */,
      Default: newAttribute("date.day"),
    }
    /**
     * Date Attribute: Date - Day of Month
     * Date Attribute ID: date.dayOfMonth
     */,
    DateDayOfMonth: {
      ref: idRef("date.dayOfMonth", "attribute"),
      identifier: "date.dayOfMonth"
      /**
       * Display Form Title: Date - Day of Month
       * Display Form ID: date.dayOfMonth
       */,
      Default: newAttribute("date.dayOfMonth"),
    }
    /**
     * Date Attribute: Date - Day of Week
     * Date Attribute ID: date.dayOfWeek
     */,
    DateDayOfWeek: {
      ref: idRef("date.dayOfWeek", "attribute"),
      identifier: "date.dayOfWeek"
      /**
       * Display Form Title: Date - Day of Week
       * Display Form ID: date.dayOfWeek
       */,
      Default: newAttribute("date.dayOfWeek"),
    }
    /**
     * Date Attribute: Date - Day of Year
     * Date Attribute ID: date.dayOfYear
     */,
    DateDayOfYear: {
      ref: idRef("date.dayOfYear", "attribute"),
      identifier: "date.dayOfYear"
      /**
       * Display Form Title: Date - Day of Year
       * Display Form ID: date.dayOfYear
       */,
      Default: newAttribute("date.dayOfYear"),
    }
    /**
     * Date Attribute: Date - Hour
     * Date Attribute ID: date.hour
     */,
    DateHour: {
      ref: idRef("date.hour", "attribute"),
      identifier: "date.hour"
      /**
       * Display Form Title: Date - Hour
       * Display Form ID: date.hour
       */,
      Default: newAttribute("date.hour"),
    }
    /**
     * Date Attribute: Date - Hour of Day
     * Date Attribute ID: date.hourOfDay
     */,
    DateHourOfDay: {
      ref: idRef("date.hourOfDay", "attribute"),
      identifier: "date.hourOfDay"
      /**
       * Display Form Title: Date - Hour of Day
       * Display Form ID: date.hourOfDay
       */,
      Default: newAttribute("date.hourOfDay"),
    }
    /**
     * Date Attribute: Date - Minute
     * Date Attribute ID: date.minute
     */,
    DateMinute: {
      ref: idRef("date.minute", "attribute"),
      identifier: "date.minute"
      /**
       * Display Form Title: Date - Minute
       * Display Form ID: date.minute
       */,
      Default: newAttribute("date.minute"),
    }
    /**
     * Date Attribute: Date - Minute of Hour
     * Date Attribute ID: date.minuteOfHour
     */,
    DateMinuteOfHour: {
      ref: idRef("date.minuteOfHour", "attribute"),
      identifier: "date.minuteOfHour"
      /**
       * Display Form Title: Date - Minute of Hour
       * Display Form ID: date.minuteOfHour
       */,
      Default: newAttribute("date.minuteOfHour"),
    }
    /**
     * Date Attribute: Date - Month/Year
     * Date Attribute ID: date.month
     */,
    DateMonthYear: {
      ref: idRef("date.month", "attribute"),
      identifier: "date.month"
      /**
       * Display Form Title: Date - Month/Year
       * Display Form ID: date.month
       */,
      Default: newAttribute("date.month"),
    }
    /**
     * Date Attribute: Date - Month of Year
     * Date Attribute ID: date.monthOfYear
     */,
    DateMonthOfYear: {
      ref: idRef("date.monthOfYear", "attribute"),
      identifier: "date.monthOfYear"
      /**
       * Display Form Title: Date - Month of Year
       * Display Form ID: date.monthOfYear
       */,
      Default: newAttribute("date.monthOfYear"),
    }
    /**
     * Date Attribute: Date - Quarter/Year
     * Date Attribute ID: date.quarter
     */,
    DateQuarterYear: {
      ref: idRef("date.quarter", "attribute"),
      identifier: "date.quarter"
      /**
       * Display Form Title: Date - Quarter/Year
       * Display Form ID: date.quarter
       */,
      Default: newAttribute("date.quarter"),
    }
    /**
     * Date Attribute: Date - Quarter of Year
     * Date Attribute ID: date.quarterOfYear
     */,
    DateQuarterOfYear: {
      ref: idRef("date.quarterOfYear", "attribute"),
      identifier: "date.quarterOfYear"
      /**
       * Display Form Title: Date - Quarter of Year
       * Display Form ID: date.quarterOfYear
       */,
      Default: newAttribute("date.quarterOfYear"),
    }
    /**
     * Date Attribute: Date - Week/Year
     * Date Attribute ID: date.week
     */,
    DateWeekYear: {
      ref: idRef("date.week", "attribute"),
      identifier: "date.week"
      /**
       * Display Form Title: Date - Week/Year
       * Display Form ID: date.week
       */,
      Default: newAttribute("date.week"),
    }
    /**
     * Date Attribute: Date - Week of Year
     * Date Attribute ID: date.weekOfYear
     */,
    DateWeekOfYear: {
      ref: idRef("date.weekOfYear", "attribute"),
      identifier: "date.weekOfYear"
      /**
       * Display Form Title: Date - Week of Year
       * Display Form ID: date.weekOfYear
       */,
      Default: newAttribute("date.weekOfYear"),
    }
    /**
     * Date Attribute: Date - Year
     * Date Attribute ID: date.year
     */,
    DateYear: {
      ref: idRef("date.year", "attribute"),
      identifier: "date.year"
      /**
       * Display Form Title: Date - Year
       * Display Form ID: date.year
       */,
      Default: newAttribute("date.year"),
    },
  }
  /**
   * Date Data Set Title: Date_period
   * Date Data Set ID: date_period
   */,
  DatePeriod: {
    ref: idRef("date_period", "dataSet"),
    identifier: "date_period"
    /**
     * Date Attribute: Date_period - Date
     * Date Attribute ID: date_period.day
     */,
    DatePeriodDate: {
      ref: idRef("date_period.day", "attribute"),
      identifier: "date_period.day"
      /**
       * Display Form Title: Date_period - Date
       * Display Form ID: date_period.day
       */,
      Default: newAttribute("date_period.day"),
    }
    /**
     * Date Attribute: Date_period - Month/Year
     * Date Attribute ID: date_period.month
     */,
    DatePeriodMonthYear: {
      ref: idRef("date_period.month", "attribute"),
      identifier: "date_period.month"
      /**
       * Display Form Title: Date_period - Month/Year
       * Display Form ID: date_period.month
       */,
      Default: newAttribute("date_period.month"),
    }
    /**
     * Date Attribute: Date_period - Quarter/Year
     * Date Attribute ID: date_period.quarter
     */,
    DatePeriodQuarterYear: {
      ref: idRef("date_period.quarter", "attribute"),
      identifier: "date_period.quarter"
      /**
       * Display Form Title: Date_period - Quarter/Year
       * Display Form ID: date_period.quarter
       */,
      Default: newAttribute("date_period.quarter"),
    }
    /**
     * Date Attribute: Date_period - Week/Year
     * Date Attribute ID: date_period.week
     */,
    DatePeriodWeekYear: {
      ref: idRef("date_period.week", "attribute"),
      identifier: "date_period.week"
      /**
       * Display Form Title: Date_period - Week/Year
       * Display Form ID: date_period.week
       */,
      Default: newAttribute("date_period.week"),
    }
    /**
     * Date Attribute: Date_period - Year
     * Date Attribute ID: date_period.year
     */,
    DatePeriodYear: {
      ref: idRef("date_period.year", "attribute"),
      identifier: "date_period.year"
      /**
       * Display Form Title: Date_period - Year
       * Display Form ID: date_period.year
       */,
      Default: newAttribute("date_period.year"),
    },
  }
  /**
   * Date Data Set Title: End_date
   * Date Data Set ID: end_date
   */,
  EndDate: {
    ref: idRef("end_date", "dataSet"),
    identifier: "end_date"
    /**
     * Date Attribute: End_date - Date
     * Date Attribute ID: end_date.day
     */,
    EndDateDate: {
      ref: idRef("end_date.day", "attribute"),
      identifier: "end_date.day"
      /**
       * Display Form Title: End_date - Date
       * Display Form ID: end_date.day
       */,
      Default: newAttribute("end_date.day"),
    }
    /**
     * Date Attribute: End_date - Month/Year
     * Date Attribute ID: end_date.month
     */,
    EndDateMonthYear: {
      ref: idRef("end_date.month", "attribute"),
      identifier: "end_date.month"
      /**
       * Display Form Title: End_date - Month/Year
       * Display Form ID: end_date.month
       */,
      Default: newAttribute("end_date.month"),
    }
    /**
     * Date Attribute: End_date - Quarter/Year
     * Date Attribute ID: end_date.quarter
     */,
    EndDateQuarterYear: {
      ref: idRef("end_date.quarter", "attribute"),
      identifier: "end_date.quarter"
      /**
       * Display Form Title: End_date - Quarter/Year
       * Display Form ID: end_date.quarter
       */,
      Default: newAttribute("end_date.quarter"),
    }
    /**
     * Date Attribute: End_date - Week/Year
     * Date Attribute ID: end_date.week
     */,
    EndDateWeekYear: {
      ref: idRef("end_date.week", "attribute"),
      identifier: "end_date.week"
      /**
       * Display Form Title: End_date - Week/Year
       * Display Form ID: end_date.week
       */,
      Default: newAttribute("end_date.week"),
    }
    /**
     * Date Attribute: End_date - Year
     * Date Attribute ID: end_date.year
     */,
    EndDateYear: {
      ref: idRef("end_date.year", "attribute"),
      identifier: "end_date.year"
      /**
       * Display Form Title: End_date - Year
       * Display Form ID: end_date.year
       */,
      Default: newAttribute("end_date.year"),
    },
  }
  /**
   * Date Data Set Title: Start_date
   * Date Data Set ID: start_date
   */,
  StartDate: {
    ref: idRef("start_date", "dataSet"),
    identifier: "start_date"
    /**
     * Date Attribute: Start_date - Date
     * Date Attribute ID: start_date.day
     */,
    StartDateDate: {
      ref: idRef("start_date.day", "attribute"),
      identifier: "start_date.day"
      /**
       * Display Form Title: Start_date - Date
       * Display Form ID: start_date.day
       */,
      Default: newAttribute("start_date.day"),
    }
    /**
     * Date Attribute: Start_date - Month/Year
     * Date Attribute ID: start_date.month
     */,
    StartDateMonthYear: {
      ref: idRef("start_date.month", "attribute"),
      identifier: "start_date.month"
      /**
       * Display Form Title: Start_date - Month/Year
       * Display Form ID: start_date.month
       */,
      Default: newAttribute("start_date.month"),
    }
    /**
     * Date Attribute: Start_date - Quarter/Year
     * Date Attribute ID: start_date.quarter
     */,
    StartDateQuarterYear: {
      ref: idRef("start_date.quarter", "attribute"),
      identifier: "start_date.quarter"
      /**
       * Display Form Title: Start_date - Quarter/Year
       * Display Form ID: start_date.quarter
       */,
      Default: newAttribute("start_date.quarter"),
    }
    /**
     * Date Attribute: Start_date - Week/Year
     * Date Attribute ID: start_date.week
     */,
    StartDateWeekYear: {
      ref: idRef("start_date.week", "attribute"),
      identifier: "start_date.week"
      /**
       * Display Form Title: Start_date - Week/Year
       * Display Form ID: start_date.week
       */,
      Default: newAttribute("start_date.week"),
    }
    /**
     * Date Attribute: Start_date - Year
     * Date Attribute ID: start_date.year
     */,
    StartDateYear: {
      ref: idRef("start_date.year", "attribute"),
      identifier: "start_date.year"
      /**
       * Display Form Title: Start_date - Year
       * Display Form ID: start_date.year
       */,
      Default: newAttribute("start_date.year"),
    },
  },
};
export const Insights = {
  /**
   * Insight Title: Sales By State Map
   * Insight ID: 24133c01-e478-4f47-b379-80aa398c3bd4
   */
  SalesByStateMap: "24133c01-e478-4f47-b379-80aa398c3bd4"
  /**
   * Insight Title: export filters reproducer
   * Insight ID: 2ed356db-c82e-4495-94f2-c3b1f3054723
   */,
  ExportFiltersReproducer: "2ed356db-c82e-4495-94f2-c3b1f3054723"
  /**
   * Insight Title: Customer Orders Count Bar Chart
   * Insight ID: 37c17051-2e7a-4c76-b4b5-f47739f17b91
   */,
  CustomerOrdersCountBarChart: "37c17051-2e7a-4c76-b4b5-f47739f17b91"
  /**
   * Insight Title: Budget per Category
   * Insight ID: b2a3bef9-08af-468d-88db-0c360c6419d9
   */,
  BudgetPerCategory: "b2a3bef9-08af-468d-88db-0c360c6419d9"
  /**
   * Insight Title: No. of Customers
   * Insight ID: b3fa5743-a237-4806-912c-442beddf281f
   */,
  NoOfCustomers: "b3fa5743-a237-4806-912c-442beddf281f"
  /**
   * Insight Title: Billing Calendar
   * Insight ID: c61e6388-2143-46e5-b012-dae47c811d67
   */,
  BillingCalendar: "c61e6388-2143-46e5-b012-dae47c811d67"
  /**
   * Insight Title: Sales By State GeoHeatmap
   * Insight ID: dfacd58c-4a84-4a24-b00e-c3ad9eedcc1a
   */,
  SalesByStateGeoHeatmap: "dfacd58c-4a84-4a24-b00e-c3ad9eedcc1a"
  /**
   * Insight Title: Customer Orders Count Table
   * Insight ID: e0e185e2-d78a-4535-b218-775689575781
   */,
  CustomerOrdersCountTable: "e0e185e2-d78a-4535-b218-775689575781",
};
export const Dashboards = {
  /**
   * Dashboard Title: SVG Image Chart Plugin
   * Dashboard ID: 09a6d0c4-1fc5-4c00-9964-a990cc4b19b9
   */
  SVGImageChartPlugin: "09a6d0c4-1fc5-4c00-9964-a990cc4b19b9"
  /**
   * Dashboard Title: Table with image
   * Dashboard ID: 21083898-fbf0-4d88-bebb-18e65969e46f
   */,
  TableWithImage: "21083898-fbf0-4d88-bebb-18e65969e46f"
  /**
   * Dashboard Title: Gauge Chart
   * Dashboard ID: 28fad0a6-bebf-4b79-a9cd-fa69fb6bde03
   */,
  GaugeChart: "28fad0a6-bebf-4b79-a9cd-fa69fb6bde03"
  /**
   * Dashboard Title: Testing dashboard - no plugin
   * Dashboard ID: 2d04010e-5795-4970-a638-4d2e3961ee90
   */,
  TestingDashboardNoPlugin: "2d04010e-5795-4970-a638-4d2e3961ee90"
  /**
   * Dashboard Title: Table PDF Export
   * Dashboard ID: 2e813e3b-1aad-4a29-9993-d2c098ba617d
   */,
  TablePDFExport: "2e813e3b-1aad-4a29-9993-d2c098ba617d"
  /**
   * Dashboard Title: Whitelabelling Bar Plugin
   * Dashboard ID: 373206af-3a7b-4dd3-8e49-e73e25fdf230
   */,
  WhitelabellingBarPlugin: "373206af-3a7b-4dd3-8e49-e73e25fdf230"
  /**
   * Dashboard Title: Headline bar chart
   * Dashboard ID: 38c3e114-d36c-4310-b945-ce6dfd5df352
   */,
  HeadlineBarChart: "38c3e114-d36c-4310-b945-ce6dfd5df352"
  /**
   * Dashboard Title: Search Filter
   * Dashboard ID: 3ace6ac4-ac43-43c1-8c78-d8204c137ebc
   */,
  SearchFilter: "3ace6ac4-ac43-43c1-8c78-d8204c137ebc"
  /**
   * Dashboard Title: Insight to action plugin
   * Dashboard ID: 40e5b6ce-d3c0-4889-931f-7977b7214f76
   */,
  InsightToActionPlugin: "40e5b6ce-d3c0-4889-931f-7977b7214f76"
  /**
   * Dashboard Title: Collapsible sidebar
   * Dashboard ID: 5532a726-b46a-469c-99f5-a6666bf9efd0
   */,
  CollapsibleSidebar: "5532a726-b46a-469c-99f5-a6666bf9efd0"
  /**
   * Dashboard Title: Overview
   * Dashboard ID: 5aaca311-c1d6-4e8b-b5fc-3822f3658485
   */,
  Overview: "5aaca311-c1d6-4e8b-b5fc-3822f3658485"
  /**
   * Dashboard Title: Radial Bar Chart Plugin
   * Dashboard ID: 6f395aba-f417-42c4-b223-41dbb0572b2c
   */,
  RadialBarChartPlugin: "6f395aba-f417-42c4-b223-41dbb0572b2c"
  /**
   * Dashboard Title: Insight groups plugin
   * Dashboard ID: 7c42f979-ce57-41fe-9bff-2e84fb9664ff
   */,
  InsightGroupsPlugin: "7c42f979-ce57-41fe-9bff-2e84fb9664ff"
  /**
   * Dashboard Title: Target Gauge KPI
   * Dashboard ID: 87f22478-d1bd-45ac-8dc2-a9df632a0949
   */,
  TargetGaugeKPI: "87f22478-d1bd-45ac-8dc2-a9df632a0949"
  /**
   * Dashboard Title: Polar Area Chart Plugin
   * Dashboard ID: 96d792ea-d739-4685-a9a4-d029f2f873f2
   */,
  PolarAreaChartPlugin: "96d792ea-d739-4685-a9a4-d029f2f873f2"
  /**
   * Dashboard Title: Multiple plugins dashboard
   * Dashboard ID: ac2a59ec-a029-40d7-8ce6-964e13909daa
   */,
  MultiplePluginsDashboard: "ac2a59ec-a029-40d7-8ce6-964e13909daa"
  /**
   * Dashboard Title: WIP: Gantt Chart
   * Dashboard ID: b345f797-dba3-4178-8da2-fa0f7c877ca8
   */,
  WIPGanttChart: "b345f797-dba3-4178-8da2-fa0f7c877ca8"
  /**
   * Dashboard Title: No Comparison Headline plugin
   * Dashboard ID: cb7792d0-80b1-45b8-96e7-194dcf8095c8
   */,
  NoComparisonHeadlinePlugin: "cb7792d0-80b1-45b8-96e7-194dcf8095c8"
  /**
   * Dashboard Title: Table with text wrap
   * Dashboard ID: d07fee70-f6ac-43f8-bd7b-47acaf2ee5c1
   */,
  TableWithTextWrap: "d07fee70-f6ac-43f8-bd7b-47acaf2ee5c1"
  /**
   * Dashboard Title: Dashboard Description plugin
   * Dashboard ID: e41cfa23-3020-4609-a45e-cdf34ac0ca0a
   */,
  DashboardDescriptionPlugin: "e41cfa23-3020-4609-a45e-cdf34ac0ca0a"
  /**
   * Dashboard Title: Markdown description plugin
   * Dashboard ID: ebe54214-778f-4736-b464-6982e878e0fb
   */,
  MarkdownDescriptionPlugin: "ebe54214-778f-4736-b464-6982e878e0fb",
};
