class faktaPriceStrategy {
    getDescription() {
        return "Velkommen til fakta' parkeringsplads. Her koster det gratis de første 5 min.";
    }

    calculatePrice(from, to) {
        const time = ((to - from) / 1000) - 5;
        if (time < 0) {
            return 0;
        } else {
            return 20 * (Math.floor(time/15) + 1);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    main(new ParkingLot(new faktaPriceStrategy()));
});