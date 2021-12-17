package com.beels;

public class StairCaseOfRecursion {
    public static void main(String[] args) {
        System.out.println(waysToClimb(1));
        System.out.println(waysToClimb(2));
        System.out.println(waysToClimb(5));
    }

    public static int waysToClimb(int stairs) {
        if ((stairs == 0) || (stairs == 1)) {
            return 1;
        }

        return waysToClimb(stairs - 1) + waysToClimb(stairs - 2);
    }
}
