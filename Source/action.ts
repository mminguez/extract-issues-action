// Copyright (c) Dolittle. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as core from '@actions/core';
import * as github from '@actions/github';
import { Logger } from '@dolittle/github-actions.shared.logging';
import { PullRequestsParser } from './PullRequestsParser';

const logger = new Logger();

run();
export async function run() {
    try {
        const repoInfo = core.getInput('repoInfo', { required: true })?.split(',') ?? [];
        const token = core.getInput('token', { required: true });
        const octokit = github.getOctokit(token);
        const repo = repoInfo[0];
        const owner = repoInfo[1];
        const pulls = octokit.pulls.list({repo, owner,});
        const listOfPulls = await PullRequestsParser.parsePRList(pulls);
        if (listOfPulls === undefined) {
            logger.debug('No establisher found for context');
            logger.debug(JSON.stringify(pulls, undefined, 2));
        }

    } catch (error) {
        fail(error);
    }
}

function fail(error: Error) {
    logger.error(error.message);
    core.setFailed(error.message);
}
