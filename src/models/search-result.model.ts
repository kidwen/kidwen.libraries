export interface SearchResult {
    ret: number;
    data: Data;
}

export interface Data {
    reason?: string;
    illegal?: boolean;
    kw?: string;
    warnWord?: string;
    album: Info;
    track: Info;
    user: Info;
    live: Info;
}

export interface Info {
    docs?: Array<Doc>;
    pageSize?: number;
    currentPage?: number;
    sc?: { [key: string]: string };
    total?: number;
    totalPage?: number;
}

export interface Doc {
    playCount?: number;
    coverPath?: string;
    title?: string;
    uid?: string;
    url?: string;
    categoryPinyin?: string;
    categoryId?: number;
    intro?: string;
    albumId: number;
    isPaid: boolean;
    isFinished?: number;
    categoryTitle?: string;
    createdAt?: Date;
    isV?: number;
    commentCount?: number;
    updatedAt?: Date;
    isVipFree?: boolean;
    nickname?: string;
    customTitle?: string;
    verifyType?: number;
    vipFreeType?: number;
    tracksCount?: number;
    isNoCopyright?: boolean;
    priceTypes: Array<string>;
    anchorUrl?: string;
    richTitle?: string;
    vipType?: number;
    albumSubscript?: number;
}
