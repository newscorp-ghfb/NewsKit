export declare const formatTrackTime: (time: number, maxTime?: number) => string;
export declare const formatDuration: (time: number, maxTime?: number) => string;
export declare const formatTrackData: (trackColor: string, indicatorColor: string, bufferColor: string, timeArr: number[], buffered: TimeRanges | undefined) => {
    colors: string[];
    values: number[];
};
export declare const getMediaSegment: (duration: number, currentPosition: number) => "0-25" | "26-50" | "51-75" | "76-100";
export declare const seekBarAriaValueText: (seekTime: number[]) => string;
//# sourceMappingURL=utils.d.ts.map