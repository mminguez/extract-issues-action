// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as core from '@actions/core';
import * as github from '@actions/github';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { PullRequestsParser } from './PullRequestsParser';
import { ExtractIssues } from './Issues/ExtractIssues';
import { IssuesList } from './Issues/IssuesList';

const logger = new Logger();

run();
export async function run() {
    try {
        const token = core.getInput('token', { required: true });
        const repoInfo = core.getInput('repoInfo', { required: true })?.split('/') ?? []; // gitHub env var GITHUB_REPOSITORY
        const octokit = github.getOctokit(token);
        const repo = repoInfo[0];
        const owner = repoInfo[1];
        const pulls = octokit.pulls.list({repo, owner,});
        const listOfPulls = (<any>PullRequestsParser).parsePRList(pulls);
        if (listOfPulls === undefined) {
            logger.debug('No pull request found');
            logger.debug(JSON.stringify(pulls, undefined, 2));
        }
        else {
            const prWithIssuesList:IssuesList = (<any>ExtractIssues).findIssuesLink(listOfPulls);
            if (prWithIssuesList === undefined) {
                logger.debug('No issues found');
                logger.debug(JSON.stringify(listOfPulls, undefined, 2));
            }
            else {
                output(prWithIssuesList);
            }
        }

    } catch (error) {
        fail(error);
    }
}

function output(prWithIssues:IssuesList) {
    // TODO using core.setOutput()
}

function fail(error: Error) {
    logger.error(error.message);
    core.setFailed(error.message);
}
