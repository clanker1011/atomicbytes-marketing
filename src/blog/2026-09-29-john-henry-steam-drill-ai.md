---
title: "John Henry, the Steam Drill, and Software Engineering in the Age of AI"
description: "Thoughts on software engineering in the age of AI, and the lesson of John Henry's race against the steam drill."
date: 2026-09-29
author: "Matt Sell"
tags:
  - essay
layout: post.njk
permalink: /posts/john-henry-steam-drill-ai/
draft: false
humanMade: true
---

There is an old American folk story about a steel-driving man named John Henry.

John Henry was exceptionally good at his job. With a hammer in each hand, he could drive steel into rock faster and harder than anyone around him. Then the railroad brought in a steam-powered drill.

Depending on which version of the story you hear, John Henry challenged the machine to prove that a human could still do the work better.

And he won.

Then he died.

I have been thinking about John Henry a lot lately while watching AI enter the software engineering industry.

Not because I believe software engineers are about to disappear. I don't.

But I do think a lot of us are in danger of making John Henry's mistake.

## Competing with the Machine

Software engineering has always placed a certain amount of cultural value on raw production.

- How quickly can you implement something?
- How much code can you write?
- How many tickets can you close?
- How quickly can you track down a bug?

For a long time, those were reasonable proxies for engineering skill. Producing software was expensive because producing code required a considerable amount of human effort.

AI changes that equation.

An AI coding agent can generate an implementation in seconds. It can write tests, search a codebase, refactor repetitive code, explain unfamiliar systems, and produce several possible solutions before a human engineer has finished reading the ticket.

The instinctive response from some engineers is to prove that they can still do it better.

And often they can.

An experienced engineer may write cleaner code. They may recognize architectural problems the model misses. They may understand the business context better. They may notice that the requested feature should not be built at all.

But that isn't really the competition.

John Henry beat the steam drill.

The railroad still bought steam drills.

## The Value Was Never the Hammer

The important question for software engineers isn't whether AI can write code better than we can.

It is whether writing code was ever the most valuable thing we were doing.

The best engineers I've worked with spend surprisingly little of their time simply translating requirements into syntax.

- They figure out what problem actually needs to be solved.
- They recognize when a seemingly simple change will create problems somewhere else in the system.
- They understand why a strange piece of code exists before deleting it.
- They ask questions that expose missing requirements.
- They balance performance, reliability, maintainability, security, product needs, and delivery pressure.
- They help other engineers make better decisions.

And sometimes they decide that the best solution is to write less software.

Those are fundamentally different skills from producing code quickly.

AI makes that distinction much more important.

If code becomes dramatically cheaper to produce, then the value of an engineer moves further away from **producing code** and toward **making good engineering decisions**.

## The Steam Drill Needs Someone to Point It

There is another part of the John Henry comparison that I think is easy to miss.

The steam drill didn't know where the railroad should go.

- It didn't negotiate land rights.
- It didn't design the bridge.
- It didn't decide whether the tunnel was worth building.

It drilled holes in rock.

AI coding tools are enormously more sophisticated than a steam drill, but the same general distinction still matters.

They are capable of producing a tremendous amount of work without necessarily understanding whether that work should exist.

That creates a new kind of engineering problem.

When producing code becomes inexpensive, producing **bad code** also becomes inexpensive.

A poorly considered architectural decision that once would have required a team several weeks to implement might now be produced in an afternoon.

The bottleneck moves.

Instead of asking:

{% callout "question", "Then" %}
How quickly can we build this?
{% endcallout %}

We increasingly need to ask:

{% callout "question", "Now" %}
How quickly can we determine whether this is the right thing to build?
{% endcallout %}

## Junior Engineers and the Missing Railroad

This transition does create a problem that I don't think the industry has fully figured out yet.

Experienced engineers developed their judgment by doing the work that AI increasingly makes unnecessary.

- We wrote thousands of lines of mediocre code.
- We misunderstood APIs.
- We introduced bugs.
- We debugged those bugs.
- We maintained systems built by people who had made different mistakes before us.

That experience slowly built the intuition that allows senior engineers to look at a proposed solution and say, "Something about this is wrong."

If AI handles more of the mechanical work, we need to think much more deliberately about how new engineers develop that same intuition.

Giving a junior engineer an AI coding agent and telling them to ship faster may increase short-term productivity while quietly destroying one of the industry's most important learning mechanisms.

The challenge won't simply be teaching engineers how to use AI.

It will be teaching them how to become good engineers in an environment where AI can perform much of the work that previously taught us engineering.

## Winning the Wrong Contest

There will probably always be engineers who can outperform AI at particular programming tasks.

There are craftspeople today who can make things by hand that are better than anything produced by a factory.

That isn't the point.

The mistake would be defining our professional value around something machines are becoming extraordinarily cheap and fast at doing.

Typing code faster than an AI is not a particularly useful career strategy.

Neither is refusing to use one as a matter of professional pride.

The more interesting question is what happens when an experienced engineer combines their judgment with the leverage these tools provide.

An engineer who understands systems, understands the business, communicates well, recognizes risk, and can direct AI effectively may be able to accomplish dramatically more than either the engineer or the AI could independently.

That isn't replacing engineering.

It is changing where engineering happens.

## Don't Be John Henry

John Henry is remembered as a hero because he proved that human skill and determination mattered.

But his story is also a warning.

He accepted the machine's definition of the contest.

The steam drill was built to drive steel faster, so John Henry tried to drive steel faster.

Software engineers don't have to make the same choice.

If AI becomes better at producing code, let it produce code.

Our job is bigger than that.

- Understand the problem.
- Design the system.
- Challenge the assumptions.
- Protect the users.
- Recognize the tradeoffs.
- Verify the result.
- Know when the machine is wrong.

And, perhaps most importantly, know where the railroad ought to go.

{% callout "quote", "The takeaway" %}
The future of software engineering probably doesn't belong to the engineers who can swing the hammer hardest.

It belongs to the ones who realize they don't have to.
{% endcallout %}
