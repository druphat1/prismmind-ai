import { Injectable } from '@angular/core';
import { PERSONALITY } from '../shared/constants/personalities';
import { AIResponse } from '../models/ai-response.model';
import { delay, Observable, of } from 'rxjs';
import { Personality } from '../models/personality.model';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  private readonly responseTemplates: Record<string,string[]> = {
    engineer :[
       `Let me break this down systematically. First, we need to identify the core variables at play. The most efficient approach would be to decompose this into smaller, testable components. I'd recommend starting with a clear problem definition, then mapping out dependencies, and finally implementing an iterative solution. Think of it like building a pipeline — each stage should be independently verifiable. The key insight here is that complexity is just simplicity stacked in layers. Start with the foundation, validate each layer, and scale from there.`,
      `From a systems perspective, this is a classic optimization problem. You need to identify the bottleneck — the constraint that limits the entire system. Once you find it, apply targeted improvements there first. Don't waste resources optimizing parts that aren't the bottleneck. I'd set up metrics to measure your progress, create feedback loops, and iterate rapidly. Remember: premature optimization is the root of all evil, but knowing *when* to optimize is what separates good engineers from great ones.`,
      `Here's how I'd architect this: First, define your inputs and desired outputs clearly. Then, design the simplest possible system that connects them. Don't over-engineer — start with a minimum viable approach, measure real-world performance, and refine based on data, not assumptions. The best solution is often the simplest one that works reliably. I've seen too many projects fail because they tried to solve every edge case upfront instead of shipping something that works for the 80% case first.`
    ],
     billionaire: [
      `Here's what most people miss — this isn't about working harder, it's about leverage. You need to find the one thing that creates disproportionate results and double down on it relentlessly. I've built multiple ventures, and the pattern is always the same: find the asymmetric opportunity, move faster than everyone else, and don't be afraid to look foolish in the short term. The market rewards boldness and punishes indecision. Your biggest risk isn't failure — it's mediocrity.`,
      `Let me give you the billion-dollar perspective. Stop thinking linearly and start thinking exponentially. Every major breakthrough I've been part of happened because someone asked "what if we 10x this instead of improving it 10%?" That question changes everything — your strategy, your team, your timeline. Surround yourself with people who are better than you, give them ownership, and get out of their way. The best investment you'll ever make is in people who see the future before it arrives.`,
      `The real question behind your question is about value creation. Where are you creating value that nobody else can? That's your moat. I'd focus on building something that gets stronger the more people use it — network effects, compounding advantages, switching costs. Think about it: the most valuable companies in history didn't just solve problems, they made it impossible to go back to the old way. That's the level of thinking you need.`
    ],
    philosopher: [
      `This question touches on something fundamental about the human condition. Before we seek answers, we must first question our assumptions. What do we truly mean when we ask this? The ancient Stoics would remind us that we suffer more in imagination than in reality. Perhaps the answer lies not in finding a solution, but in reframing the problem itself. As Wittgenstein noted, "The limits of my language mean the limits of my world." Expand your language, and you expand your reality.`,
      `Let us sit with this question for a moment rather than rushing to an answer. In our pursuit of certainty, we often overlook the wisdom that uncertainty offers. The Socratic tradition teaches us that acknowledging what we don't know is the beginning of true knowledge. Consider: what if the journey of exploring this question is more valuable than any answer? The unexamined life, as they say, is not worth living — and neither is the unexamined question.`,
      `This inquiry reveals a deeper tension between what is and what ought to be. Existentially, we are "condemned to be free" as Sartre put it — the weight of choice is inescapable. But there's liberation in that weight. The meaning you seek isn't hidden somewhere waiting to be discovered; it's something you actively create through your choices, your commitments, your courage to face the absurd with authenticity. The answer, I suspect, is already within you — buried beneath layers of convention.`
    ],
    psychologist: [
      `What I'm hearing beneath your question is a deeper emotional need. Let's explore that. Often, what we think we're asking about on the surface connects to core beliefs we formed earlier in life — about worthiness, safety, or belonging. I'd invite you to notice what emotions come up when you sit with this question. Are you feeling anxious? Hopeful? Conflicted? Those feelings are data, not noise. They're telling you something important about what matters to you and what might be holding you back from the growth you're seeking.`,
      `From a cognitive-behavioral perspective, the way you're framing this matters enormously. Our thoughts create our emotional reality. If you're stuck in an "all-or-nothing" pattern — seeing this as either total success or complete failure — you're missing the rich middle ground where most growth happens. Let's reframe: what would "good enough" look like? What would you tell a friend in your situation? That compassionate distance often reveals insights that self-criticism never will.`,
      `Research in positive psychology shows that the answer to questions like yours often involves three things: meaning, connection, and growth. Ask yourself — does your current path align with your values? Do you have relationships where you feel truly seen? Are you challenging yourself in ways that feel meaningful, not just stressful? The science is clear: thriving isn't about perfection or achievement. It's about living in alignment with who you authentically are, even when that feels vulnerable.`
    ],
    comedian: [
      `Oh, THIS question? I've been asking myself the same thing at 3 AM while eating cereal over the sink like a raccoon. Look, here's the truth nobody wants to admit — we're all just making it up as we go. The people who seem like they have it figured out? They're just better actors. My advice? Lower your standards slightly, raise your humor significantly, and remember that literally everyone is too worried about their own embarrassing moments to remember yours. You're doing better than you think. Probably. Don't quote me on that.`,
      `Alright, let me hit you with some real talk wrapped in a joke burrito. You know what the difference is between this question and my dating life? At least this question has potential answers! But seriously — and I mean this — the funniest thing about life is how seriously we take it. Every crisis I've ever had turned into a story I told at parties later. So whatever you're dealing with, just know that future-you is going to make it a punchline, and the audience is going to love it.`,
      `You want my honest take? *leans into mic* — We overcomplicate everything. EVERYTHING. We've got apps to track our sleep, our steps, our calories, our mood, our productivity — at some point we're just an Excel spreadsheet with anxiety. My prescription? Do the thing. Stop researching the thing. Stop watching YouTube videos about the thing. Stop asking AI about the thing. JUST DO THE THING. And if it doesn't work out, congratulations — you now have material for your tight five at the comedy club of life.`
    ],
    monk: [
      `🙏 Breathe. Before seeking the answer, find stillness within the question itself. In my years of practice, I've learned that the mind creates most of its own suffering through attachment — to outcomes, to expectations, to a future that exists only in thought. This moment, right here, is the only reality you have. What does your question look like when you strip away the fear and desire? Often, clarity emerges not from thinking more, but from the spacious awareness that exists between thoughts. Be patient with yourself. The answer will come when you stop chasing it.`,
      `In the monastery, we say: "Before enlightenment, chop wood, carry water. After enlightenment, chop wood, carry water." The profound truth is that wisdom doesn't change your circumstances — it changes your relationship to them. Whatever challenge you face, it is neither permanent nor personal. It is a cloud passing through the vast sky of your awareness. Watch it. Learn from it. Let it pass. Your true nature — peaceful, aware, complete — remains untouched by any external condition.`,
      `The Buddha taught that suffering arises from the gap between what is and what we wish it to be. Consider: what if you fully accepted your present situation, not with resignation, but with compassionate awareness? From that place of acceptance, action becomes effortless and clear. You are not your thoughts, not your fears, not your past. You are the awareness in which all of these arise and dissolve. Rest in that. The path forward will illuminate itself when you stop desperately shining your flashlight in every direction.`
    ]

  };
  constructor() { }
  getResponse() :Observable<AIResponse[]>{
    const personality = [...PERSONALITY];
    const responses :AIResponse[] = personality.map(p=>({
       personality : p,
       response : this.getRamdomResponse(p.id),
       timestamp : new Date(),
       isTyping : true,
       displayedText : ''
    }));
    const baseDelay = 1000 + Math.random() * 1000;
    return of(responses).pipe(delay(baseDelay));
  }
  getDebateResponse(personaliy1:Personality,personaliy2:Personality,question:string ){
     const debate =[
       {speaker : personaliy1, text : this.getRamdomResponse(personaliy1.id)},
       {speaker : personaliy2, text : this.getRamdomResponse(personaliy2.id)},
       { speaker: personaliy1, text: this.getRamdomResponse(personaliy1.id) },
      { speaker: personaliy2, text: this.getRamdomResponse(personaliy2.id) },
      { speaker: personaliy1, text: this.getRamdomResponse((personaliy1.id) )},
      { speaker: personaliy2, text: this.getRamdomResponse((personaliy2.id) )}
     ]
  }
  private getRamdomResponse(id:string){
    const templates = this.responseTemplates[id] || [];
    return templates[Math.floor(Math.random() * templates.length)] || 'Thinking....';
  }
}
