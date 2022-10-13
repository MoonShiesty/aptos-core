window.SIDEBAR_ITEMS = {"fn":[["exponential_buckets","Create `count` buckets, where the lowest bucket has an upper bound of `start` and each following bucket’s upper bound is `factor` times the previous bucket’s upper bound. The final +Inf bucket is not counted and not included in the returned slice. The returned slice is meant to be used for the Buckets field of [`HistogramOpts`]."],["gather","Return all `MetricFamily` of `DEFAULT_REGISTRY`."]],"macro":[["histogram_opts","Create a [`HistogramOpts`][crate::HistogramOpts]."],["register_counter","Create a [`Counter`][crate::Counter] and registers to default registry."],["register_gauge","Create a [`Gauge`][crate::Gauge] and registers to default registry."],["register_histogram","Create a [`Histogram`][crate::Histogram] and registers to default registry."],["register_histogram_vec","Create a [`HistogramVec`][crate::HistogramVec] and registers to default registry."],["register_int_counter","Create an [`IntCounter`][crate::IntCounter] and registers to default registry."],["register_int_counter_vec","Create an [`IntCounterVec`][crate::IntCounterVec] and registers to default registry."],["register_int_gauge","Create an [`IntGauge`][crate::IntGauge] and registers to default registry."],["register_int_gauge_vec","Create an [`IntGaugeVec`][crate::IntGaugeVec] and registers to default registry."]],"mod":[["const_metric",""],["op_counters","`OpCounters` is a collection of convenience methods to add arbitrary counters to modules. For now, it supports Int-Counters, Int-Gauges, and Histogram."]],"struct":[["Histogram","A [`Metric`] counts individual observations from an event or sample stream in configurable buckets. Similar to a `Summary`, it also provides a sum of observations and an observation count."],["HistogramTimer","Timer to measure and record the duration of an event."],["TextEncoder","An implementation of an [`Encoder`] that converts a [`MetricFamily`] proto message into text format."]],"trait":[["Encoder","An interface for encoding metric families into an underlying wire protocol."]],"type":[["Counter","A [`Metric`] represents a single numerical value that only ever goes up."],["Gauge","A [`Metric`] represents a single numerical value that can arbitrarily go up and down."],["HistogramVec","A [`Collector`] that bundles a set of Histograms that all share the same [`Desc`], but have different values for their variable labels. This is used if you want to count the same thing partitioned by various dimensions (e.g. HTTP request latencies, partitioned by status code and method)."],["IntCounter","The integer version of [`Counter`]. Provides better performance if metric values are all positive integers (natural numbers)."],["IntCounterVec","The integer version of [`CounterVec`]. Provides better performance if metric are all positive integers (natural numbers)."],["IntGauge","The integer version of [`Gauge`]. Provides better performance if metric values are all integers."],["IntGaugeVec","The integer version of [`GaugeVec`]. Provides better performance if metric values are all integers."]]};