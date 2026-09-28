const repositoryUrl = 'https://github.com/Kaiden118/Cross-Modality-Conditional-Diffusion-Model'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
        <a href="#top" className="flex items-center gap-3" aria-label="Project home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">CM</span>
          <span className="text-sm font-semibold tracking-tight">Project overview</span>
        </a>
        <a
          href={repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          View on GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <div id="top" className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10 lg:px-12 lg:pb-24">
        <section className="grid gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-24">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold tracking-wide text-primary">
              MEDICAL IMAGE TRANSLATION
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-[4.25rem]">
              Cross-Modality <span className="text-primary">Conditional</span> Diffusion Model
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              A framework for translating between corresponding T1-weighted images and T2-weighted MRI scans, built on the Denoising Diffusion Probabilistic Model (DDPM).
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Explore the project <span aria-hidden="true">↗</span>
              </a>
              <span className="text-sm text-muted-foreground">Created by Zechuan Lu</span>
            </div>
          </div>

          <div className="rounded-[2rem] bg-secondary p-5 sm:p-8" aria-label="Overview of translation between T1-weighted MRI and T2-weighted MRI using DDPM">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">The framework</span>
              <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">DDPM</span>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
              <div className="flex min-h-24 flex-1 flex-col justify-between rounded-2xl border border-border bg-card p-4">
                <span className="text-xs font-medium text-muted-foreground">Source modality</span>
                <span className="text-lg font-semibold tracking-tight">T1-weighted</span>
              </div>
              <span className="hidden px-1 text-primary sm:block" aria-hidden="true">↔</span>
              <span className="py-1 text-center text-primary sm:hidden" aria-hidden="true">↕</span>
              <div className="flex min-h-24 flex-1 flex-col justify-between rounded-2xl bg-primary p-4 text-primary-foreground">
                <span className="text-xs font-medium text-primary-foreground/75">Translation framework</span>
                <span className="text-lg font-semibold tracking-tight">Conditional diffusion</span>
              </div>
              <span className="hidden px-1 text-primary sm:block" aria-hidden="true">↔</span>
              <span className="py-1 text-center text-primary sm:hidden" aria-hidden="true">↕</span>
              <div className="flex min-h-24 flex-1 flex-col justify-between rounded-2xl border border-border bg-card p-4">
                <span className="text-xs font-medium text-muted-foreground">Target modality</span>
                <span className="text-lg font-semibold tracking-tight">T2-weighted</span>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Translation between corresponding MRI modalities
            </p>
          </div>
        </section>

        <section className="grid gap-6 border-t border-border pt-10 sm:grid-cols-2 sm:gap-12 sm:pt-12" aria-label="About the project">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">What it is</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">A diffusion-based approach to modality translation.</h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              This project implements a cross-modality medical image translation framework based on DDPM, designed to generate between corresponding T1-weighted images and T2-weighted MRI scans.
            </p>
          </div>
          <div className="rounded-3xl bg-secondary p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Why it matters</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Fewer repeated scans may mean less time and cost.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              By generating between modalities, the framework can help save time and cost for people who would otherwise need several scans to obtain all modalities.
            </p>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-5 border-t border-border pt-6 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Cross Modality Conditional Diffusion Model</p>
            <p className="mt-1 text-sm text-muted-foreground">A project by Zechuan Lu</p>
          </div>
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="break-all text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            github.com/Kaiden118/Cross-Modality-Conditional-Diffusion-Model
          </a>
        </footer>
      </div>
    </main>
  )
}

