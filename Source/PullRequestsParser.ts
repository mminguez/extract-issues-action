// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { IPullRequestsParser } from './IPullRequestsParser';

/**
 * Represents an implementation of {IPullRequestsParser}.
 *
 * @export
 * @class PullRequestsParser
 * @implements {IPullRequestsParser}
 */
export class PullRequestsParser implements IPullRequestsParser {

    constructor(){}

    parsePRList(pulls: any) : string[] | undefined {
        const strPRList = JSON.stringify(pulls);
        JSON.parse(strPRList);
        const arrPRList = strPRList.split('[{');

        return arrPRList ?? undefined;
    }
}