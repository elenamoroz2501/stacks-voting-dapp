;; Voting Contract with Deadline

(define-data-var candidate-a uint u0)
(define-data-var candidate-b uint u0)
(define-data-var total-voters uint u0)

(define-map voters { voter: principal } { voted: bool })

(define-data-var voting-deadline uint (+ block-height u100)) ;; voting open for 100 blocks

(define-constant err-already-voted (err u100))
(define-constant err-voting-closed (err u101))

(define-public (vote-for-a)
  (begin
    (asserts! (< block-height (var-get voting-deadline)) err-voting-closed)
    (asserts! (is-none (map-get? voters { voter: tx-sender })) err-already-voted)

    (map-set voters { voter: tx-sender } { voted: true })
    (var-set candidate-a (+ (var-get candidate-a) u1))
    (var-set total-voters (+ (var-get total-voters) u1))

    (ok "Vote recorded for A")
  )
)

(define-public (vote-for-b)
  (begin
    (asserts! (< block-height (var-get voting-deadline)) err-voting-closed)
    (asserts! (is-none (map-get? voters { voter: tx-sender })) err-already-voted)

    (map-set voters { voter: tx-sender } { voted: true })
    (var-set candidate-b (+ (var-get candidate-b) u1))
    (var-set total-voters (+ (var-get total-voters) u1))

    (ok "Vote recorded for B")
  )
)

(define-read-only (get-results)
  {
    candidate-a: (var-get candidate-a),
    candidate-b: (var-get candidate-b),
    total-voters: (var-get total-voters)
  }
)

(define-read-only (has-voted (user principal))
  (is-some (map-get? voters { voter: user }))
)

(define-read-only (get-deadline)
  (var-get voting-deadline)
)
