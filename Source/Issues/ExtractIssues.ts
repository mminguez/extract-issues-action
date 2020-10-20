// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { PullsList } from '../PullsList';
import { IExtractIssues } from './IExtractIssues';
import { PrSummary } from './PrSummary';
import { IssuesList } from './IssuesList';

/**
 * Represents an implementation of {IPullRequestsParser}.
 *
 * @export
 * @class ExtractIssues
 * @implements {IExtractIssues}
 */

export class ExtractIssues implements IExtractIssues {

    constructor(){}
    

    findIssuesLink(listOfPulls: PullsList){
        const prWithSummary:PrSummary[] = this.extractSummary(listOfPulls);

        let nr = 0;
        let issueBuffer:string[] = [];
        const prWithissues:IssuesList[] = [];
        for (let i of prWithSummary) {
            prWithissues[nr].pullRequestNum = i.pullRequestNum;
            issueBuffer = i.description.split('\[(.*?)\]');
            let mr = 0;
            for (let j of issueBuffer) {
                prWithissues[nr].issues[mr].operation.match('\[(.*?)\]');
                prWithissues[nr].issues[mr].link.match('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)');
                mr++;
            }
            nr++;
        }

        return prWithissues ?? undefined;
    }

    /**
     * Get a list of all the PR from a repository and return it with corresponding description to each PR
     * 
     * @param listOfPulls 
     */

    private extractSummary(listOfPulls: PullsList) {
        const prWithSummary:PrSummary[] = [];
        let nr = 0;
        for (let i of listOfPulls.arrPRList) {
            const lines = i.split('\n');
            for (let j of i) {
                prWithSummary[nr].pullRequestNum = nr;
                if (j.includes('head')) {
                    prWithSummary[nr].description = j;
                }
                else prWithSummary[nr].description = "";
            }
            nr++;
        }
        return prWithSummary ?? undefined;
    }

}