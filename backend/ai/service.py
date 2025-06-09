import sys
import pandas as pd
import numpy as np
import json
import os
import traceback

def analyze_data(csv_path):
    df = pd.read_csv(csv_path)
    # Replace NaN, inf, -inf with None for JSON compatibility
    df = df.replace({np.nan: None, np.inf: None, -np.inf: None})
    summary = {
        "record_count": len(df),
        "columns": list(df.columns),
        "sample_rows": df.head(5).to_dict(orient='records'),
        "insights": [],
    }
    if 'Policy Type' in df.columns:
        summary["insights"].append(
            f"Detected {df['Policy Type'].nunique()} unique policies."
        )
    if 'Region' in df.columns:
        summary["insights"].append(
            f"Top region: {df['Region'].mode()[0]}"
        )
    if 'Claim Amount' in df.columns:
        summary["insights"].append(
            f"Average claim amount: {df['Claim Amount'].mean():.2f}"
        )
    return summary

if __name__ == "__main__":
    try:
        csv_file = sys.argv[1]
        print(f"Reading {csv_file}", file=sys.stderr)
        result = analyze_data(csv_file)
        print(json.dumps(result, allow_nan=False))
    except Exception as e:
        print(json.dumps({"error": str(e), "traceback": traceback.format_exc()}))
    finally:
        if 'csv_file' in locals() and os.path.exists(csv_file):
            try:
                os.remove(csv_file)
            except Exception:
                pass