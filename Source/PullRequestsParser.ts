// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PullsList } from './PullsList';
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

    parsePRList(pulls: any) : PullsList | undefined {
        const strPRList = JSON.stringify(pulls);
        const arrPRList = strPRList.split('[{');
        const numberOfPr = arrPRList.length; 
        for (let i of arrPRList) {
            i = JSON.parse(i);
        }
         
        return {
            numberOfPr,
            arrPRList
            } ?? undefined;
    }

}